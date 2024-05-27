students = [
    { id: 1, name: "mohamed" },
    { id: 2, name: "usman" },
    { id: 3, name: "siddiq" },
    { id: 4, name: "otis" },
    { id: 5, name: "anto"},
]

schoolAstudentIds = [1, 3, 5]
schoolBstudentIds = [2, 4]

function print(IDS) {
    let i = 0;
    while (i < IDS.length) {
        const studentId = IDS[i];
        //console.log("studentID= "+studentId)
        let j = 0;
        while (j < students.length) {
            const jStudent = students[j];
            if (studentId === jStudent.id) {
                console.log(jStudent);
            }
            j++
        }
        i++
    }
}
print(schoolAstudentIds);




