// NOTE! The steps in this file are basically identical to the ones you
// performed in the SpeakHello.js file.

// STEP 6: Wrap the entire contents of SpeakGoodBye.js inside of an IIFE
// See Lecture 52, part 2
(function (window) {

  // STEP 7: Create an object, called 'byeSpeaker' to which you will attach
  // the "speak" method and which you will expose to the global context
  // See Lecture 52, part 1
  var byeSpeaker = {};

  // DO NOT attach the speakWord variable to the 'byeSpeaker' object.
  var speakWord = "Good Bye";

  // STEP 8: Rewrite the 'speak' function such that it is attached to the
  // byeSpeaker object instead of being a standalone function.
  // See Lecture 52, part 2
  byeSpeaker.speak = function speak(name) {
    console.log(speakWord + " " + name);
  }

  // a. Add another method called speakSimple into the SpeakGoodBye.js and SpeakHello.js that is externally exposed just like the speak method is. The speakSimple method should not use console.log, but instead should simply return the greeting concatenated to the passed in name argument.
  byeSpeaker.speakSimple = function speakSimple(name) {
    return speakWord + " " + name;
  }

  // STEP 9: Expose the 'byeSpeaker' object to the global scope. Name it
  // 'byeSpeaker' on the global scope as well.
  // xxxx.xxxx = byeSpeaker;
  window.byeSpeaker = byeSpeaker;

})(window);