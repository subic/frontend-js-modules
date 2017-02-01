// Basic detect trigger-word(s) function using browser speech recognition (currently Crome only). Expects a result function, trigger words (can be blank) and optional repeat boolean to stop the script after first run.
// Example call: spokenWordTrigger(resultFunction, "Firstword", "SecondWord", true);

module.exports = function (successCallback, triggerPhrase1, triggerPhrase2, repeat) {
  window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  const recognition = new SpeechRecognition();
  recognition.interimResults = true;
  //recognition.lang = 'SL';

  recognition.addEventListener('result', e => {
    let transcript = Array.from(e.results)
      .map(result => result[0])
      .map(result => result.transcript);

    if (e.results[0].isFinal) {
      if (transcript.includes(triggerPhrase1) || transcript.includes(triggerPhrase2)) {
        if (!repeat) recognition.removeEventListener('end', recognition.start);
        successCallback();

      } else transcript = [];
    }
  });

  recognition.addEventListener('end', recognition.start);
  recognition.start();
};