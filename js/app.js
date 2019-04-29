function calculate() {
    var totalCourse = document
        .getElementById('courseTable')
        .getElementsByTagName('tbody')[0].rows.length

    var gp = 0 //total grade point this sem
    var cg = 0 //total credit this sem
    for (var i = 0; i < totalCourse; i++) {
        var credit = Number(document.getElementById('credit' + (i + 1)).value)
        var grade = Number(document.getElementById('grade' + (i + 1)).value)

        gp = gp + credit * grade
        cg = cg + credit
        console.log(credit, grade, cg, gp)
    }

    var cgx = Number(document.getElementById('cgx').value)
    var gpx = Number(document.getElementById('gpx').value)

    var gpax = (gpx + gp) / (cgx + cg)

    console.log(cg, cgx, gp, gpx, gpax)

    document.getElementById('cg').innerHTML = cg
    document.getElementById('gp').innerHTML = gp
    document.getElementById('gpax').innerHTML = gpax
}

function addRow() {
    var tBody = document
        .getElementById('courseTable')
        .getElementsByTagName('tbody')[0]

    var row = tBody.insertRow()
    var nRows = tBody.rows.length

    var cell0 = row.insertCell(0)
    var cell1 = row.insertCell(1)
    var cell2 = row.insertCell(2)

    cell0.innerHTML = `<div class="container">
        <input class="center light" type="text"/>
        </div>`
    cell1.innerHTML =
        `<div class="container">
        <select id="credit` +
        nRows +
        `" class="browser-default center light">
            <option value="3">3</option>
            <option value="2">2</option>
            <option value="1">1</option>
        </select>
        </div>`

    cell2.innerHTML =
        `<div class="container">
        <select id="grade` +
        nRows +
        `" class="browser-default center light">
            <option value="4.0">A</option>
            <option value="3.5">B+</option>
            <option value="3.0">B</option>
            <option value="2.5">C+</option>
            <option value="2.0">C</option>
            <option value="1.5">D+</option>
            <option value="1.0">D</option>
        </select>
        </div>`
}
