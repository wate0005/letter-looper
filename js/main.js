/*global prompt*/

var letter, i, k;
    
//!letter means that letter is not declared
while (!letter) {
    letter = prompt("Enter a letter please!");
}
//letter=prompt is asigning the act of adding the generated character to the output

    
//printing job

//this is the OUTER loop
for (i = 0; i < 10; i += 1) {
    
    //this is the INNER loop
    for (k = 0; k <= i; k += 1) {
        document.write(letter);
    }
    
    document.write("<br>");
}
