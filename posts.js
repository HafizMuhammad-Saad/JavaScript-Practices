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
                        const postDetails = postUpdateData.map((postDetail) => {
                          const { created_at, userId, content, imageURL } = postDetail
                          document.getElementById('cardfeed').innerHTML += `
                            <div class="card-body border-bottom">
                    <div class="d-flex align-items-center gap-3">
                      <img src="assets/WhatsApp Image 2024-02-15 at 6.38.20 PM.jpeg" alt="" class="rounded-circle" width="40" height="40">
                      <h6 class="fw-semibold mb-0 fs-4">${currentUser.name}</h6>
                      <span class="fs-2" id="postTime"><span class="p-1 bg-light rounded-circle d-inline-block"></span> ${created_at}</span>
                    </div>
                    <p class="text-dark my-3">
                      ${content}
                    </p>
                    <img src="${imageURL}" alt="" class="img-fluid rounded-4 w-100 object-fit-cover" style="height: 360px;">
                    <div class="d-flex align-items-center my-3">
                      <div class="d-flex align-items-center gap-2">
                        <a class="text-white d-flex align-items-center justify-content-center bg-primary p-2 fs-4 rounded-circle" href="javascript:void(0)" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Like">
                          <i class="fa fa-thumbs-up"></i>
                        </a>
                        <span class="text-dark fw-semibold">67</span>
                      </div>
                      <div class="d-flex align-items-center gap-2 ms-4">
                        <a class="text-white d-flex align-items-center justify-content-center bg-secondary p-2 fs-4 rounded-circle" href="javascript:void(0)" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Comment">
                          <i class="fa fa-comments"></i>
                        </a>
                        <span class="text-dark fw-semibold">2</span>
                      </div>
                      <a class="text-dark ms-auto d-flex align-items-center justify-content-center bg-transparent p-2 fs-4 rounded-circle" href="javascript:void(0)" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Share">
                        <i class="fa fa-share"></i>
                      </a>
                    </div>
                  </div>
                  <div class="d-flex align-items-center gap-3 p-3">
                    <img src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="" class="rounded-circle" width="33" height="33">
                    <input type="text" class="form-control py-8" id="exampleInputtext" aria-describedby="textHelp" placeholder="Comment">
                    <button class="btn btn-primary">Comment</button>
                  </div>
                          `

                        })
                        return postDetails;
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



// let postContent = document.getElementById("postContent");
// let postFile = document.getElementById("postFile");
// let postBtn = document.getElementById("postBtn");

// // Fetch current user
// function getCurrentUser() {
//   let currentUser = JSON.parse(localStorage.getItem("currentUser"));
//   if (!currentUser) {
//     console.log("User not logged in");
//     return null;
//   }
//   return currentUser;
// }

// // Create a new post
// async function createPost(userId, content) {
//   try {
//     const { data, error } = await supabase
//       .from("posts")
//       .insert({ content, userId })
//       .select();
//     if (error) throw error;
//     console.log("Post created:", data[0]);
//     return data[0];
//   } catch (error) {
//     console.error("Error creating post:", error);
//   }
// }

// // Upload image for a post
// async function uploadPostImage(postId, file) {
//   try {
//     const { data: imageData, error } = await supabase.storage
//       .from("postimages")
//       .upload(`${postId}`, file, {
//         cacheControl: "3600",
//         upsert: false,
//       });
//     if (error) throw error;

//     const { data: publicUrlData } = supabase.storage
//       .from("postimages")
//       .getPublicUrl(imageData.path);
//     console.log("Image uploaded:", publicUrlData.publicUrl);
//     return publicUrlData.publicUrl;
//   } catch (error) {
//     console.error("Error uploading image:", error);
//   }
// }

// // Update a post with image URL
// async function updatePostWithImage(postId, imageUrl) {
//   try {
//     const { data, error } = await supabase
//       .from("posts")
//       .update({ imageURL: imageUrl })
//       .eq("id", postId)
//       .select();
//     if (error) throw error;
//     console.log("Post updated with image:", data[0]);
//     return data[0];
//   } catch (error) {
//     console.error("Error updating post with image:", error);
//   }
// }

// // Render a single post in the UI
// function renderPost(post, user) {
//   const { created_at, content, imageURL } = post;
//   document.getElementById("cardfeed").innerHTML += `
//     <div class="card-body border-bottom">
//       <div class="d-flex align-items-center gap-3">
//         <img src="assets/default-user-image.png" alt="" class="rounded-circle" width="40" height="40">
//         <h6 class="fw-semibold mb-0 fs-4">${user ? user.name : "Unknown User"}</h6>
//         <span class="fs-2" id="postTime">${new Date(created_at).toLocaleString()}</span>
//       </div>
//       <p class="text-dark my-3">${content}</p>
//       ${imageURL ? `<img src="${imageURL}" class="img-fluid rounded-4 w-100 object-fit-cover" style="height: 360px;">` : ""}
//     </div>
//   `;
// }

// // Fetch and render all posts when the page loads
// async function fetchAndRenderPosts() {
//   try {
//     const { data: posts, error } = await supabase
//       .from("posts")
//       .select("*")
//       .order("created_at", { ascending: false });

//     if (error) throw error;

//     if (posts && posts.length > 0) {
//       posts.forEach((post) => {
//         renderPost(post, getCurrentUser());
//       });
//     }
//   } catch (error) {
//     console.error("Error fetching posts:", error);
//   }
// }

// // Add a new post
// async function addPost() {
//   let currentUser = getCurrentUser();
//   if (!currentUser || !currentUser.userId) return;

//   try {
//     const post = await createPost(currentUser.userId, postContent.value);
//     if (post && postFile.files.length > 0) {
//       const imageUrl = await uploadPostImage(post.id, postFile.files[0]);
//       if (imageUrl) {
//         const updatedPost = await updatePostWithImage(post.id, imageUrl);
//         if (updatedPost) {
//           renderPost(updatedPost, currentUser);
//         }
//       }
//     } else if (post) {
//       renderPost(post, currentUser);
//     }
//   } catch (error) {
//     console.error("Error in adding post:", error);
//   }
// }

// // Load posts on page load
// document.addEventListener("DOMContentLoaded", async () => {
//   await fetchAndRenderPosts();
// });

// // Add post on button click
// if (postBtn) {
//   postBtn.addEventListener("click", addPost);
// }

// async function savePost_1(content, userId, callback) {
//   try {
//     const {data, error} = await supabase
//     .from("posts")
//     .insert({ content, userId })
//     .select();
//     if (error) throw error;
//     console.log('post saved:', data[0]);
//     callback(data[0]);
    
//   } catch (error) {
//     console.log('error saving post:',error);
    
//   }
// }

// function displaySavedPost_1(post) {
//   console.log('display saved post:', post);
  
// }

// savePost_1('This is a test post!', '123', displaySavedPost_1)
