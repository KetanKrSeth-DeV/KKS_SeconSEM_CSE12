function calculateResult() {

    let n = parseInt(document.getElementById("subjects").value);

    if (isNaN(n) || n <= 0) {
        alert("Enter a valid number of subjects");
        return;
    }

    let total = 0;

    for (let i = 1; i <= n; i++) {

        let marks = parseFloat(prompt("Enter marks for Subject " + i));

        while (marks < 0 || marks > 100 || isNaN(marks)) {
            marks = parseFloat(
                prompt("Invalid marks! Enter marks between 0 and 100")
            );
        }

        total += marks;
    }

    let average = total / n;

    let grade;

    if (average >= 90)
        grade = "A+";
    else if (average >= 80)
        grade = "A";
    else if (average >= 70)
        grade = "B";
    else if (average >= 60)
        grade = "C";
    else if (average >= 50)
        grade = "D";
    else
        grade = "F";

    let result = average >= 40 ? "PASS" : "FAIL";

    document.getElementById("result").innerHTML =
        `
        <h3>Total Marks: ${total}</h3>
        <h3>Average Marks: ${average.toFixed(2)}</h3>
        <h3>Grade: ${grade}</h3>
        <h3>Result: ${result}</h3>
        `;
}