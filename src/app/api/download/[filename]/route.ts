// type GetParams = {
//     params: {
//       filename: string;
//     };
//   };
  
//   // export an async GET function. This is a convention in NextJS
//   export async function GET(req: Request, { params }: GetParams) {
//     // filename for the file that the user is trying to download
//     const filename = params.filename;
  
//     // external file URL
//     const URL =
//       "https://timanderic-storage-a587c09210046-staging.s3.amazonaws.com/protected/Resumes/"+filename;
  
//     // use fetch to get a response
//     const response = await fetch(URL);
  
//     // return a new response but use 'content-disposition' to suggest saving the file to the user's computer
//     return new Response(response.body, {
//       headers: {
//         ...response.headers, // copy the previous headers
//         "content-disposition": `attachment; filename="${filename}"`,
//       },
//     });
//   }