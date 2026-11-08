const dukung = document.getElementById("dukung");

if (dukung) {
    let jumlah = 0;

    dukung.addEventListener("click", function () {
        jumlah = jumlah + 1;
        dukung.textContent = "Go Sharks Go! 🦈" + jumlah;

        dukung.classList.remove("pop");
        void dukung.offsetWidth;
        dukung.classList.add("pop");
    });
}