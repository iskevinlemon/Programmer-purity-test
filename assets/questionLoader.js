var questions = [
    "Copying code from Stack Overflow but it still doesn't work",
    "Hard coding just because it is easier",
    "Using a bad variable name, E.g. <code>a1</code> instead of <code>apple</code>",
    "Using a + instead of proper String formatting",
    "Use a light mode in code editor"
];

for (let i = 0; i < questions.length; i++) {
  document.querySelector("#question_items").innerHTML += `
    <li> 
        <input type="checkbox" id="${i}"> 
        <label for="${i}">
            ${questions[i]}
        </label> 
    </li> 
    `;
}

$("#toShow").hide();
// const TOTAL_SCORE = 5;
const TOTAL_SCORE = questions.length; // depends on no of questions from questions array

$('#submit').click(function() {
    var sinList = document.querySelectorAll('input[type="checkbox"]:checked');
    var sins = sinList.length;
    var purity = TOTAL_SCORE - sins;

    $('#score').html(purity);
    $("#toShow").show();
    $("#toHide").hide();
});