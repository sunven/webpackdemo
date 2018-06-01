module.exports = function () {
    var input = [1, 2, 3];
    input = input.map(item => item + 1);
    var div = document.createElement('div');
    div.textContent = input[0] + "divaaa";
    return div;
};