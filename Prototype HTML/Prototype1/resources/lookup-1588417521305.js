(function(window, undefined) {
  var dictionary = {
    "887fe6dc-789e-401e-8428-a0ededc7cc09": "CHARACTER",
    "4a526d47-3245-46fb-a285-4336088dfc3d": "DICES",
    "8aeeb822-2ba6-4aa1-9543-eb699b51dd38": "SIGN UP",
    "ebf33552-53cf-4f4f-a3a1-809104f12b69": "Contacts",
    "cace0316-79e4-4b30-824c-7898c6e4b862": "PLAYERS",
    "cd663023-6f33-4202-8ee4-39e590ac5ddf": "WelcomeScreen",
    "f681e7f1-6237-4c8c-b099-b65e7619a93c": "PROFILE",
    "ecf76368-cfcb-4722-87b7-0e8707edcedd": "LOG IN",
    "d12245cc-1680-458d-89dd-4f0d7fb22724": "First Screen",
    "41d629b8-37d5-40bf-872e-83606f621cb4": "GameDescription",
    "ba2da6c1-5911-4394-8e5b-bc77fc99cb80": "Games",
    "06a3832d-1d3f-4b67-9370-418f3a95ebbe": "New Game",
    "89702264-9f8c-4d44-ae1f-17ccc8d4d74b": "CHARACTER GENERATION",
    "19827a33-713c-4776-9137-4331f91d0a43": "CHARACTER3",
    "109ad32e-82d7-4aed-b3e0-afd3f1b5bc70": "CHARACTER2",
    "1693e0e5-4f23-43d7-946f-ceb8ad4f3da0": "RULES",
    "1f9b8dc7-5869-4908-8fad-dced42109ba8": "EDITMYCHARACTEr",
    "e8b7ab83-bc88-489b-8fd1-d1fadb712d23": "Game Master Screen",
    "56ef7aa7-68a4-40ea-9565-e4c1e38e7e54": "NPCS",
    "8e071e37-e960-4727-a312-c608e2a8319f": "PROFILE2",
    "66942628-441a-42a4-b45e-40a2e224925d": "MAP",
    "70b3bd8f-a55b-4eca-b647-6a455a663eb2": "NPC3",
    "eb960e16-857a-46c6-bdcb-51acc43e106b": "NPC2",
    "44565a58-8b19-4790-8fb2-60bb085210cf": "PlayerScreen",
    "0111fa1b-e472-4c44-a862-11ec5e30dcaf": "NPC1",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Template 1",
    "bb8abf58-f55e-472d-af05-a7d1bb0cc014": "default"
  };

  var uriRE = /^(\/#)?(screens|templates|masters|scenarios)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);