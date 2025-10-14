const averageGrade = Math.round(Math.random() * 100);
console.log(`Average grade is ${averageGrade}`);

if (averageGrade >= 91 && averageGrade <= 100)
    console.log('Відмінно');
else if (averageGrade >= 81 && averageGrade <= 90)
    console.log('Дуже добре');
else if (averageGrade >= 71 && averageGrade <= 80)
    console.log('Добре');
else if (averageGrade >= 60 && averageGrade <= 70)
    console.log('Задовільно');
else
    console.log('Незадовільно')
