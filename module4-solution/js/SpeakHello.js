// STEP 2: Wrap the entire contents of SpeakHello.js inside of an IIFE
// See Lecture 52, part 2
(function (window) {

  // STEP 3: Create an object, called 'helloSpeaker' to which you will attach
  // the "speak" method and which you will expose to the global context
  // See Lecture 52, part 1
  var helloSpeaker = {};

  // DO NOT attach the speakWord variable to the 'helloSpeaker' object.
  var speakWord = "Hello";

  // STEP 4: Rewrite the 'speak' function such that it is attached to the
  // helloSpeaker object instead of being a standalone function.
  // See Lecture 52, part 2
  helloSpeaker.speak = function speak(name) {
    console.log(speakWord + " " + name);
  }

  // a. Add another method called speakSimple into the SpeakGoodBye.js and SpeakHello.js that is externally exposed just like the speak method is. The speakSimple method should not use console.log, but instead should simply return the greeting concatenated to the passed in name argument.
  helloSpeaker.speakSimple = function speakSimple(name) {
    return speakWord + " " + name;
  }

  // STEP 5: Expose the 'helloSpeaker' object to the global scope. Name it
  // 'helloSpeaker' on the global scope as well.
  // See Lecture 52, part 2
  window.helloSpeaker = helloSpeaker;

  // (Note, Step 6 will be done in the SpeakGoodBye.js file.)
  // xxxx.xxxx = helloSpeaker;

})(window);