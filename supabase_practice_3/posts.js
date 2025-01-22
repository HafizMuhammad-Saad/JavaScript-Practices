let postContent = document.getElementById("postContent");
let postFile = document.getElementById("postFile");
let postBtn = document.getElementById("postBtn");

async function addPost() {
  let currentUser = JSON.parse(localStorage.getItem("currentUser"));
if (!currentUser) {
    console.log("currentUser is null. It was not set in localStorage.");
    return;
}
if (!currentUser.userId) {
    console.log("currentUser is missing the 'userId' property.");
    return;
}
  console.log(currentUser);
  try {
    const { data, error } = await supabase
      .from("posts")
      .insert({ content: postContent.value, userId: currentUser.userId })
      .select();

    if (error) throw error;
    if (data) {
      console.log(data);
        if (postFile.files.length > 0) {
          let currentFile = postFile.files[0];
          try {
            const { data: imageStoreData, error: imageStoreError } =
              await supabase.storage
                .from("postimages")
                .upload(`${data[0].id}`, currentFile, {
                  cacheControl: "3600",
                  upsert: false,
                });
            if (imageStoreError) throw error;

            if (imageStoreData) {
              console.log(imageStoreData);

              try {
                const { data: publicUrlData } = supabase.storage
                  .from("postimages")
                  .getPublicUrl(imageStoreData.path);

                  if (publicUrlData) {
                    console.log(publicUrlData.publicUrl);
                    try {
                      const { data: postUpdateData, error: postUpdateError } = await supabase
                      .from('posts')
                      .update({ imageURL: publicUrlData.publicUrl })
                      .eq('id', data[0].id)
                      .select();

                      if (postUpdateError) throw error;

                      if (postUpdateData) {
                        console.log(postUpdateData);
                      }
                    
                    } catch (error) {
                        console.log(error);
                        
                    }
                  }
              } catch (error) {
                console.log(error);
                
              }
            }
          } catch (error) {
            console.log(error);
            
          }
        }

    }
  } catch (error) {
    console.log(error);
  }
}

if (postBtn) {
  postBtn.addEventListener('click', addPost)
}

