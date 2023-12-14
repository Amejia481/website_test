document.getElementById("download").onclick = function() {
    const link = document.createElement("a");
    link.href = "data:,";
    for (let i = 0; i < 1000; i++) {
        link.href += "helloworld";
    }
    link.download = "hello-world.txt";
    link.click();
    return false;
}