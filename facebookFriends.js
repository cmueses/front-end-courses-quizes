/*
Create an object called facebookProfile. The object should have 3 properties:

your name
the number of friends you have, and
an array of messages you've posted (as strings)
The object should also have 4 methods:

postMessage(message) - adds a new message string to the array
deleteMessage(index) - removes the message corresponding to the index provided
addFriend() - increases the friend count by 1
removeFriend() - decreases the friend count by 1
*/

var facebookProfile = {
    name: "Carlos Mueses",
    messages: ["Hello World", "Happy to be here", "Right now"],
    friends: 500,

    postMessage: function(){
        return facebookProfile.messages.push("Let me explain");
    },

    deleteMessage: function(index){
        if(index <= facebookProfile.messages.length){
            return facebookProfile.messages.splice(index, 1);
        } else{
            return "Please enter an index lesser or equal to the array length";
        }
        
    },

    addFriend: function(){
      facebookProfile.friends += 1;
      return facebookProfile.friends;
    },

    removeFriend: function(){
      facebookProfile.friends -= 1;
      return facebookProfile.friends;
    }
}

console.log(facebookProfile.deleteMessage(1))

