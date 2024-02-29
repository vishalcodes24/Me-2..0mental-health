function getBotResponse(input) {
    //rock paper scissors
    if (input == "rock") {
        return "paper";
    } else if (input == "paper") {
        return "scissors";
    } else if (input == "scissors") {
        return "rock";
    }

    // Simple responses
    if (input == "hello") {
        return "Hello there!";
    } else if (input == "goodbye") {
        return "Talk to you later!";
    } else {
        return "Try asking something else!";
    }
    function getBotResponse(input) {
        // Rock Paper Scissors
        if (input == "rock") {
            return "paper";
        } else if (input == "paper") {
            return "scissors";
        } else if (input == "scissors") {
            return "rock";
        }
    
        // Simple responses
        if (input == "hello") {
            return "Hello there!";
        } else if (input == "goodbye") {
            return "Talk to you later!";
        } else if (input == "how are you") {
            return "I'm just a computer program, but I'm doing well! How can I assist you today?";
        } else if (input == "what is your name") {
            return "I'm ME-2.0, a virtual assistant designed to help you!";
        } else if (input == "what is the meaning of life") {
            return "The meaning of life is a philosophical question with no definitive answer, but many believe it's about finding purpose and happiness.";
        } else if (input == "tell me a joke") {
            return "Why don't scientists trust atoms? Because they make up everything!";
        } else if (input == "thanks" || input == "thank you") {
            return "You're welcome! If you have any more questions, feel free to ask.";
        } else {
            return "I'm not sure how to respond to that. Try asking something else!";
        }
    }
    
}