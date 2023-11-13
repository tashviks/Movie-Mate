// const handleClick = async () => {
//     var x = document.getElementById("prompt").value;
//     // const url = 'https://open-ai21.p.rapidapi.com/conversationgpt35';
//     // const options = {
//     //     method: 'POST',
//     //     headers: {
//     //         'content-type': 'application/json',
//     //         'X-RapidAPI-Key': '9c4682bc6emsh0b95b65b2f37b64p1588ccjsn489b57e43ec2',
//     //         'X-RapidAPI-Host': 'open-ai21.p.rapidapi.com'
//     //     },
//     //     body: {
//     //         messages: [
//     //             {
//     //                 role: 'user',
//     //                 content: 'Hello',
//     //             }
//     //         ],
//     //         web_access: true,
//     //         system_prompt: '',
//     //         temperature: 0.9,
//     //         top_k: 5,
//     //         top_p: 0.9,
//     //         max_tokens: 256
//     //     }
//     // };
//     // try {
//     //     const response = (await fetch(url, options)).json();
//     //     const result = await response.text();
//     //     console.log(result);
//     // } catch (error) {
//     //     console.error(error);
//     // }

// const url = 'https://chatgpt-gpt5.p.rapidapi.com/ask';
// const options = {
// 	method: 'POST',
// 	headers: {
// 		'content-type': 'application/json',
// 		'X-RapidAPI-Key': '9c4682bc6emsh0b95b65b2f37b64p1588ccjsn489b57e43ec2',
// 		'X-RapidAPI-Host': 'chatgpt-gpt5.p.rapidapi.com'
// 	},
// 	body: {
// 		query: 'How does photosynthesis work?'
// 	}
// }
// 	const response = await fetch(url, options);
// 	const result = await response.text();
// 	console.log(result);
// }

const handleClick = async () => {
    var UserText = document.getElementById("prompt").value;
    const API_ENDPOINT =
      "https://generativelanguage.googleapis.com/v1beta2/models/chat-bison-001:generateMessage?key=AIzaSyAyAUuYwUsDbrhViCvBOl6S-s9QpHUSjpU";
  
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        prompt: {
          context: "",
          examples: [],
          messages: [
            {
              content: UserText,
            },
          ],
        },
        temperature: 0.25,
        top_k: 40,
        top_p: 0.95,
        candidate_count: 1,
      }),
    };
  
    try {
      const response = await fetch(API_ENDPOINT, requestOptions);
      const data = await response.json();
    //   console.log("Message text:", data.candidates[0].content);
    document.getElementById("response").style.backgroundColor="blue";
    document.getElementById("response").innerHTML = data.candidates[0].content;
    
    }
    catch (error) {
      console.error(error);
    }

  };
