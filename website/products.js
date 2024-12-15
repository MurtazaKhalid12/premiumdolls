document.getElementById("apply-filters").addEventListener("click", function () {
    const selectedSkin = document.getElementById("skin-color").value;
    const selectedType = document.getElementById("type").value;

    document.querySelectorAll(".product-card").forEach((card) => {
        const cardSkin = card.getAttribute("data-skin");
        const cardType = card.getAttribute("data-type");

        if (
            (selectedSkin === "all" || cardSkin === selectedSkin) &&
            (selectedType === "all" || cardType === selectedType)
        ) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
});
