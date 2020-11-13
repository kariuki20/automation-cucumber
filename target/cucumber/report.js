$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("feature/BackgroudSetButton_login.feature");
formatter.feature({
  "line": 2,
  "name": "Validate sky blue  button exists",
  "description": "",
  "id": "validate-sky-blue--button-exists",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@End2End"
    }
  ]
});
formatter.before({
  "duration": 7965243500,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "User is on the todo list website",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDef.User_is_on_the_todo_list_website()"
});
formatter.result({
  "duration": 646757700,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "User should be able to use set White Background Button",
  "description": "",
  "id": "validate-sky-blue--button-exists;user-should-be-able-to-use-set-white-background-button",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 12,
      "name": "@Scenario2"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "User clicks on the  set White Background Button",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "The Background color Should Change to White",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDef.user_clicks_on_the_set_White_Background_Button()"
});
formatter.result({
  "duration": 25900,
  "status": "passed"
});
formatter.match({
  "location": "StepDef.The_Background_color_Should_Change_to_White()"
});
formatter.result({
  "duration": 135800,
  "status": "passed"
});
});