function CreateTreaty() {

    var Treaty_Type = document.getElementById('Treaty_Type').value;
    var Your_Alliance = document.getElementById('Your_Alliance').value;
    var Other_Alliance = document.getElementById('Other_Alliance').value;

    var googleDocUrl = 'https://docs.google.com/document/create?title=' + encodeURIComponent(Treaty_Type) + " " + "Agreement" + " " + encodeURIComponent(Other_Alliance) + " - " + encodeURIComponent(Your_Alliance);

    window.open(googleDocUrl, '_blank');
};