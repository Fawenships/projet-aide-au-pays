```javascript
/* =========================================================
   PNH CHECK
   Application JavaScript
   Version prototype
   ========================================================= */


/* =========================================================
   DONNÉES DE DÉMONSTRATION
   IMPORTANT :
   Ces données sont fictives.
   ========================================================= */

const vehicles = [
    {
        plate: "HT-1234",
        type: "Automobile",
        brand: "Toyota",
        model: "Corolla",
        status: "Enregistré",
        verification: "OK"
    },

    {
        plate: "HT-5678",
        type: "Camionnette",
        brand: "Nissan",
        model: "Frontier",
        status: "Enregistré",
        verification: "OK"
    },

    {
        plate: "AA-2026",
        type: "Automobile",
        brand: "Hyundai",
        model: "Tucson",
        status: "À vérifier",
        verification: "ATTENTION"
    }
];


/* =========================================================
   ÉLÉMENTS HTML
   ========================================================= */

const plateInput =
    document.getElementById("plate");


const loginModal =
    document.getElementById("loginModal");


/* =========================================================
   NORMALISER UNE PLAQUE
   ========================================================= */

function normalizePlate(value) {

    return value
        .toUpperCase()
        .replace(/\s+/g, "")
        .trim();

}


/* =========================================================
   RECHERCHER UNE PLAQUE
   ========================================================= */

function verifyPlate() {

    const rawPlate = plateInput.value;

    const plate = normalizePlate(rawPlate);


    /* Vérification du champ */

    if (!plate) {

        showMessage(
            "Veuillez entrer un numéro de plaque.",
            "warning"
        );

        plateInput.focus();

        return;
    }


    /* Recherche */

    const vehicle = vehicles.find(
        item =>
            normalizePlate(item.plate) === plate
    );


    /* Résultat */

    if (vehicle) {

        showVehicleResult(vehicle);

    } else {

        showMessage(
            `Aucun véhicule de démonstration trouvé pour ${plate}.`,
            "info"
        );

    }

}


/* =========================================================
   AFFICHER LE RÉSULTAT
   ========================================================= */

function showVehicleResult(vehicle) {

    const existing =
        document.getElementById("resultBox");

    if (existing) {
        existing.remove();
    }


    const resultBox =
        document.createElement("div");

    resultBox.id = "resultBox";

    resultBox.className =
        "result-box";


    const isWarning =
        vehicle.verification === "ATTENTION";


    resultBox.innerHTML = `

        <div class="result-header">

            <div>
                <span class="result-label">
                    RÉSULTAT DE LA VÉRIFICATION
                </span>

                <h3>
                    ${escapeHTML(vehicle.plate)}
                </h3>
            </div>

            <div class="result-status ${
                isWarning
                    ? "warning"
                    : "valid"
            }">

                ${
                    isWarning
                        ? "⚠️ À vérifier"
                        : "✅ Vérifié"
                }

            </div>

        </div>


        <div class="result-grid">

            <div>
                <span>Type</span>
                <strong>
                    ${escapeHTML(vehicle.type)}
                </strong>
            </div>

            <div>
                <span>Marque</span>
                <strong>
                    ${escapeHTML(vehicle.brand)}
                </strong>
            </div>

            <div>
                <span>Modèle</span>
                <strong>
                    ${escapeHTML(vehicle.model)}
                </strong>
            </div>

            <div>
                <span>Statut</span>
                <strong>
                    ${escapeHTML(vehicle.status)}
                </strong>
            </div>

        </div>


        <div class="result-notice">

            ${
                isWarning
                    ? "⚠️ Ce résultat nécessite une vérification complémentaire par un utilisateur autorisé."
                    : "✓ Les informations correspondent aux données fictives du prototype."
            }

        </div>

    `;


    const searchCard =
        document.querySelector(".search-card");


    searchCard.after(resultBox);


    resultBox.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });

}


/* =========================================================
   MESSAGE SIMPLE
   ========================================================= */

function showMessage(message, type = "info") {

    const existing =
        document.getElementById("messageBox");

    if (existing) {
        existing.remove();
    }


    const box =
        document.createElement("div");

    box.id = "messageBox";

    box.className =
        `message-box ${type}`;


    box.textContent = message;


    const searchCard =
        document.querySelector(".search-card");


    searchCard.after(box);


    setTimeout(() => {

        box.classList.add("hide");

        setTimeout(() => {
            box.remove();
        }, 300);

    }, 3500);

}


/* =========================================================
   SCANNER
   ========================================================= */

function scanPlate() {

    showMessage(
        "Le scanner caméra et le module OCR seront ajoutés dans une prochaine version.",
        "info"
    );

}


/* =========================================================
   CONNEXION
   ========================================================= */

function openLogin() {

    loginModal.classList.add("active");

    document.body.style.overflow = "hidden";

}


function closeLogin() {

    loginModal.classList.remove("active");

    document.body.style.overflow = "";

}


/* =========================================================
   FERMER LE MODAL EN CLIQUANT À L'EXTÉRIEUR
   ========================================================= */

window.addEventListener("click", event => {

    if (event.target === loginModal) {

        closeLogin();

    }

});


/* =========================================================
   TOUCHE ESCAPE
   ========================================================= */

document.addEventListener("keydown", event => {

    if (event.key === "Escape") {

        closeLogin();

    }

});


/* =========================================================
   RECHERCHE AVEC ENTER
   ========================================================= */

plateInput.addEventListener(
    "keydown",
    event => {

        if (event.key === "Enter") {

            verifyPlate();

        }

    }
);


/* =========================================================
   SÉCURITÉ D'AFFICHAGE
   ========================================================= */

function escapeHTML(value) {

    return String(value)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");

}


/* =========================================================
   MESSAGE CONSOLE
   ========================================================= */

console.log(
    "PNH Check — Prototype chargé."
);

console.log(
    "Les données actuellement utilisées sont fictives."
);
```
