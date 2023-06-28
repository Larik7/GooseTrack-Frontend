// import { Octokit } from 'octokit';
// import { createAsyncThunk } from '@reduxjs/toolkit';
// const { TOKEN } = require('../config');

// const octokit = new Octokit({
//   TOKEN,
// });

// export const fetchIssues = createAsyncThunk(
//   'issues/fetchAll',
//   async ({ owner, repo, next = 1 }, { rejectWithValue }) => {
//     try {
//       const response = await octokit.request(
//         'GET /repos/{owner}/{repo}/issues',
//         {
//           owner,
//           repo,
//           page: next,
//           per_page: 10,
//         }
//       );

//       return response.data;
//     } catch (error) {
//       alert('incorect url, example -> https://github.com/owner/repo');
//       return rejectWithValue(error.message);
//     }
//   }
// );
