let gradeFinder = (totMarks, finExam) => {
  if (finExam) {
    return totMarks >= 90
  }
  return (totMarks >= 89 && totMarks <= 100) 
}

console.log(gradeFinder('93', 'ddd'));
console.log(gradeFinder("78", " "));
console.log(gradeFinder("89", "true "));
console.log(gradeFinder("99", "true "));

function exam_status(totmarks,is_exam)
  {
  if (is_exam) {
    return totmarks >= 90;
  }
 return (totmarks >= 89 && totmarks <= 100);
 }

// console.log(exam_status("78", " "));
// console.log(exam_status("89", "true "));
// console.log(exam_status("99", "true "));
