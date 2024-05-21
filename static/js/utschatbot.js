function tryIt() {
  showChatBotInterface(); // Call function to display the chat interface
}

function showChatBotInterface() {
  document.querySelector(".document-image").style.display = "none";
  document.querySelector(".try-it-button").style.display = "none";
  document.querySelector(".chat-container").style.display = "block";
}

// The rest of your code remains the same...


async function sendMessage() {
  var userInput = document.getElementById("user-input").value;
  if (userInput.trim() === "") {
      return;
  }
  appendUserMessage(userInput);
  try {
      var botResponse = await getResponse(userInput);
      if (botResponse && botResponse.candidates && botResponse.candidates.length > 0) {
          var botText = botResponse.candidates[0].content.parts[0].text;
          appendBotMessage(botText);
      } else {
          // Handle cases where the response doesn't have the expected structure
          console.error("Invalid bot response:", botResponse);
          appendBotMessage("Oops! Something went wrong. Please try again later.");
      }
  } catch (error) {
      console.error("Error:", error);
      appendBotMessage("Oops! Something went wrong. Please try again later.");
  }
  document.getElementById("user-input").value = "";
}



async function getResponse(userInput) {
    const apiKey = 'AIzaSyDOlx-o_m8mlGU8OWG0TgM8peNfZqB1ZNo'; // Ensure your API key is correct and valid
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-pro-latest:generateContent?key=${apiKey}`;
  
    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify({
        "contents": [{
          "parts": [{
              "text": "input: hi"
            },
            {
              "text": "output: Hello! I'\''m UTS Chat Bot. How can I assist you today?"
            },
            {
              "text": "input: Foundation programme"
            },
            {
              "text": "output: Foundation in Arts and Foundation in Science"
            },
            {
              "text": "input: Undergraduate programme"
            },
            {
              "text": "output: **School of Engineering and Technology:**\n- Bachelor of Food Technology\n- Bachelor of Civil Engineering\n- Bachelor of Electrical Engineering\n- Bachelor of Mechanical Engineering\n- Bachelor of Science in Occupational Safety and Health\n\n**School of Business and Management:**\n- Bachelor of Accountancy\n- Bachelor of Business Marketing\n- Bachelor of Business Administration\n- Bachelor of Technology Management\n\n**School of Computing & Creative Media:**\n- Bachelor of Computer Science\n- Bachelor of Arts in Industrial Design\n- Bachelor of Arts in Creative Digital Media\n- Bachelor of Mobile Game Development\n\n**School of Built Environment:**\n- Bachelor of Quantity Surveying\n- Bachelor of Science in Architecture\n- Bachelor of Art Interior Design\n- Bachelor of Science in Property and Construction Management"
            },
            {
              "text": "input: Postgraduate programme"
            },
            {
              "text": "output: **Master Programmes:**\n- Master in Computing\n- Master in Architecture\n- Master of Engineering\n- Master of Project Management\n- Master of Business Administration\n- Master of Science in Applied Sciences\n- Master of Science in Business Management"
            },
            {
              "text": "input: Doctor (PhD) Programmes"
            },
            {
              "text": "output: **Doctor (PhD) Programmes:**\n- Doctor of Philosophy in Computing\n- Doctor of Philosophy in Engineering\n- Doctor of Philosophy in Applied Science\n- Doctor of Philosophy in Business Management"
            },
            {
              "text": "input: Where is UTS located?"
            },
            {
              "text": "output: No. 1, Jalan Universiti, Sibu, Sarawak 96000"
            },
            {
              "text": "input: How to apply programme"
            },
            {
              "text": "output: Visit the UTS website: https://www.uts.edu.my/\nClick on \"Admissions\"\nSelect the programme you are interested in\nClick on \"Apply Now\"\nFollow the instructions on the application form"
            },
            {
              "text": "input: Who is the owner of UTS?"
            },
            {
              "text": "output: UTS is fully owned by the Sarawak State Government through the State Financial Secretary Incorporated."
            },
            {
              "text": "input: Is UTS a public or private university?"
            },
            {
              "text": "output: UTS is a private university registered with the Ministry of Higher Education under the IPTS Act 555."
            },
            {
              "text": "input: what is the fee for foundation programme"
            },
            {
              "text": "output: Tuition Fees for Malaysian Students for foundation programme is 10000,while International Students is 13000"
            },
            {
              "text": "input: What facilities we have"
            },
            {
              "text": "output: lecture hall, physic lab, biology lab,  sport hall and etc."
            },
            {
              "text": "input: Entry Requirements"
            },
            {
              "text": "output: Pass SPM/O-level equivalent with FIVE (5) Grade C’s; or Pass UEC with FOUR (4) Grade B’s"
            },
            {
              "text": "input: Email"
            },
            {
              "text": "output: enquiry@uts.edu.my"
            },
            {
              "text": "input: Tel"
            },
            {
              "text": "output: Tel: (+6) 084-367300"
            },
            {
              "text": "input: Accreditation"
            },
            {
              "text": "output: MQA Accreditation"
            },
            {
              "text": "input: Duration of Foundation studies"
            },
            {
              "text": "output: 1 Year"
            },
            {
              "text": "input: Academic resources Centre operating hours"
            },
            {
              "text": "output: Monday-Friday(8am-8pm)\nSaturday(8am-12pm)\nClosed on Sunday and Public holiday"
            },
            {
              "text": "input: Campus Virtual tour"
            },
            {
              "text": "output: here is the link: https://cir.uts.edu.my/campus-virtual-tour/"
            },
            {
              "text": "input: UTS website link"
            },
            {
              "text": "output: https://www.uts.edu.my/"
            },
            {
              "text": "input: Transfer degree programme"
            },
            {
              "text": "output: You can transfer to:\nUniversity of Birmingham, United Kingdom\nUniversity of Essex, United Kingdom\nUniversity of Canterbury, New Zealand\nMurdoch University,Australia"
            },
            {
              "text": "input: ${userInput}"
            },
            {
              "text": "output: "
            }
          ]
        }]
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    });
  
    const data = await response.json();
    return data; // Ensure that the response data is returned
  }
  
  async function sendMessage() {
    var userInput = document.getElementById("user-input").value;
    if (userInput.trim() === "") {
      return;
    }
    appendUserMessage(userInput);
    try {
      var botResponse = await getResponse(userInput);
      if (botResponse && botResponse.candidates && botResponse.candidates.length > 0) {
        var botText = botResponse.candidates[0].content.parts[0].text;
        appendBotMessage(botText);
      } else {
        // Handle cases where the response doesn't have the expected structure
        console.error("Invalid bot response:", botResponse);
        appendBotMessage("Oops! Something went wrong. Please try again later.");
      }
    } catch (error) {
      console.error("Error:", error);
      appendBotMessage("Oops! Something went wrong. Please try again later.");
    }
    document.getElementById("user-input").value = "";
  }
  


function appendUserMessage(message) {
  var chatBox = document.getElementById("chat-box");
  var userMessageDiv = document.createElement("div");
  userMessageDiv.className = "user-message";
  userMessageDiv.textContent = message;
  chatBox.appendChild(userMessageDiv);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function appendBotMessage(message) {
  var chatBox = document.getElementById("chat-box");
  var botMessageDiv = document.createElement("div");
  botMessageDiv.className = "bot-message";
  botMessageDiv.textContent = message;
  chatBox.appendChild(botMessageDiv);
  chatBox.scrollTop = chatBox.scrollHeight;
}
