// MADE OF SUN  JAVASCRIPT

// ========================================  CONFIGURAÇÕES ========================================

const WHATSAPP_NUMBER = "5521981742741";

// |=================================  MEDIDAS DOS TAMANHOS ===========================================

const SIZE_MEASUREMENTS = {

    P: {
        colo: "",
        busto: "",
        cintura: ""
    },

    M: {
        colo: "",
        busto: "",
        cintura: ""
    },

    G: {
        colo: "",
        busto: "",
        cintura: ""
    },

    GG: {
        colo: "",
        busto: "",
        cintura: ""
    }

};

// ======================================================  PRODUTO  ======================================================

const products = [

    {
        id: 1,
        name: "Biquíni Pedrazzi",
        categories: ["biquini", "praia"],
        price: 119.99,
        image: "imagens/Pedrazzi.jpg",
        badge: ""
    },

    {
        id: 2,
        name: "Conjunto Sereia",
        categories: ["conjunto", "praia"],
        price: 289.99,
        image: "imagens/Conj_sereia.jpg",
        badge: ""
    },

    {
        id: 3,
        name: "Conjunto Anitta",
        categories: ["conjunto"],
        price: 219.99,
        image: "imagens/Conj_anitta.jpg",
        badge: ""
    },

    {
        id: 4,
        name: "Cropped Fê",
        categories: ["cropped"],
        price: 129.99,
        image: "imagens/Crop_fe.jpg",
        badge: ""
    },

    {
        id: 5,
        name: "Conjunto Ariel",
        categories: ["conjunto"],
        price: 249.99,
        image: "imagens/Conj_ariel.jpg",
        badge: ""
    },

    {
        id: 6,
        name: "Bolsa Nath",
        categories: ["bolsa", "acessorio"],
        price: 129.99,
        image: "imagens/Bolsa_nath.jpg",
        badge: ""
    },

    {
        id: 7,
        name: "Cropped Lia",
        categories: ["cropped"],
        price: 119.99,
        image: "imagens/Crop_lia.jpg",
        badge: ""
    },

    {
        id: 8,
        name: "Bucket Flora",
        categories: ["acessorio"],
        price: 89.99,
        image: "imagens/Bucket_flora.jpg",
        badge: ""
    },

    {
        id: 9,
        name: "Bolsa Taty",
        categories: ["bolsa", "acessorio"],
        price: 169.99,
        image: "imagens/Bolsa_taty.jpg",
        badge: ""
    },

    {
        id: 10,
        name: "Cropped Sol",
        categories: ["cropped"],
        price: 99.99,
        image: "imagens/Crop_sol.jpg",
        badge: ""
    },

    {
        id: 11,
        name: "Cropped MDX",
        categories: ["cropped"],
        price: 129.99,
        image: "imagens/Crop_MDX.jpg",
        badge: ""
    },

    {
        id: 12,
        name: "Bolsa Chess",
        categories: ["bolsa", "acessorio"],
        price: 149.99,
        image: "imagens/Bolsa_chess.jpg",
        badge: ""
    }

];

// ====================================================== CARRINHO ======================================================

let cart = [];

// ======================================================  PRODUTO SELECIONADO ======================================================

let selectedProduct = null;
let selectedSize = null;

// ====================================================== ELEMENTOS DO HTML ======================================================

const productsGrid = document.getElementById("productsGrid");
const cartCount = document.getElementById("cartCount");
const cartItems = document.getElementById("cartItems");
const cartTotal = document.getElementById("cartTotal");
const cartOverlay = document.getElementById("cartOverlay");
const openCartButton = document.getElementById("openCart");
const closeCartButton = document.getElementById("closeCart");
const checkoutButton = document.getElementById("checkoutButton");
const menuButton = document.getElementById("menuButton");
const nav = document.getElementById("nav");
const loadMoreProducts = document.getElementById("loadMoreProducts");

// ====================================================== CRIAR MODAL DE TAMANHO ======================================================

function createSizeModal() {

    let modal = document.getElementById("sizeModal");

    if (modal) {
        return modal;
    }

    modal = document.createElement("div");

    modal.className = "size-modal-overlay";
    modal.id = "sizeModal";

    modal.setAttribute("aria-hidden", "true");

    modal.innerHTML = `
        <div class="size-modal">

            <button
                type="button"
                class="size-modal-close"
                id="closeSizeModal"
                aria-label="Fechar"
            >
                ×
            </button>

            <div class="size-modal-header">

                <span class="eyebrow">
                    ESCOLHA O TAMANHO
                </span>

                <h2 id="modalProductName">
                    Produto
                </h2>

                <p>
                    Selecione o tamanho da peça.
                </p>

            </div>

            <div class="size-options">

                <button
                    type="button"
                    class="size-option"
                    data-size="P"
                >
                    P
                </button>

                <button
                    type="button"
                    class="size-option"
                    data-size="M"
                >
                    M
                </button>

                <button
                    type="button"
                    class="size-option"
                    data-size="G"
                >
                    G
                </button>

                <button
                    type="button"
                    class="size-option"
                    data-size="GG"
                >
                    GG
                </button>

                <button
                    type="button"
                    class="size-option size-custom"
                    data-size="Sob Medida"
                >
                    Sob Medida
                </button>

            </div>

            <div class="measurements">

                <div class="measurement-field">

                    <label for="colo">
                        COLO
                    </label>

                    <input
                        type="text"
                        id="colo"
                        placeholder="Ex.: 30 cm"
                        disabled
                    >

                </div>

                <div class="measurement-field">

                    <label for="busto">
                        BUSTO
                    </label>

                    <input
                        type="text"
                        id="busto"
                        placeholder="Ex.: 86 cm"
                        disabled
                    >

                </div>

                <div class="measurement-field">

                    <label for="cintura">
                        CINTURA
                    </label>

                    <input
                        type="text"
                        id="cintura"
                        placeholder="Ex.: 68 cm"
                        disabled
                    >

                </div>

            </div>

            <p
                class="custom-size-message"
                id="customSizeMessage"
            >
                Para peças sob medida, informe suas medidas
                nos campos acima.
            </p>

            <button
                type="button"
                class="button button-primary modal-add-button"
                id="modalAddButton"
            >
                Adicionar ao carrinho
            </button>

        </div>
    `;

    document.body.appendChild(modal);

    return modal;
}

// ======================================================  CRIAR MODAL  ======================================================

const sizeModal = createSizeModal();

// ======================================================  ELEMENTOS DO MODAL  ======================================================

const closeSizeModal = document.getElementById("closeSizeModal");
const modalProductName = document.getElementById("modalProductName");
const modalAddButton = document.getElementById("modalAddButton");
const sizeButtons = document.querySelectorAll(".size-option");
const coloInput = document.getElementById("colo");
const bustoInput = document.getElementById("busto");
const cinturaInput = document.getElementById("cintura");
const customSizeMessage = document.getElementById("customSizeMessage");

// ====================================================== FORMATAR PREÇO ======================================================

function formatPrice(value) {

    return value.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
    });

}

// ======================================================  NOME DA CATEGORIA  ======================================================

function getCategoryName(category) {

    const categories = {
        cropped: "Cropped",
        bolsa: "Bolsa",
        conjunto: "Conjunto",
        acessorio: "Acessório",
        biquini: "Biquíni",
        praia: "Praia"
    };

    return categories[category] || category;

}

// ======================================================  MOSTRAR PRODUTOS  ======================================================

function renderProducts(category = "todos") {

    if (!productsGrid) { 
        return; 
    }

    productsGrid.innerHTML = "";
    
    let filteredProducts = products;
    
    if (category !== "todos") {
        filteredProducts = products.filter(
            function (product) {
                if (product.categories) { return product.categories.includes(category); }
                return product.category === category;
            }
        );
    }

    if (filteredProducts.length === 0) {

        productsGrid.innerHTML =
            `<p> Nenhum produto encontrado. </p>`;

        if (loadMoreProducts) { loadMoreProducts.style.display = "none"; }

        return;
    }

    // ==================================================  QUANTIDADE INICIAL  ==================================================

    const initialProducts = 8;
    const showAll = productsGrid.dataset.showAll === "true";
    const productsToShow =
        showAll
            ? filteredProducts
            : filteredProducts.slice(0, initialProducts);

    // ==================================================  MOSTRAR PRODUTOS  ==================================================

    productsToShow.forEach(

        function (product) {
        
            const card = document.createElement("article"); 
            card.className = "product-card";
            card.style.animationDelay = `${productsGrid.children.length * 0.08}s`;

            let badgeHTML = "";
            
            if (product.badge) {
                badgeHTML = ` <span class="product-badge"> ${product.badge} </span>`;
            }

            card.innerHTML =
                `
            <div class="product-image"> ${badgeHTML} 
            <img src="${product.image}"alt="${product.name}"loading="lazy">
            </div>

                <div class="product-info">
                    <span class="product-category">
                        ${getCategoryName(
                    product.categories
                        ? product.categories[0]
                        : product.category)}
                    </span>

                    <h3> ${product.name} </h3>

                <div class="product-price"> ${formatPrice(product.price)} </div>
                    <button class="add-cart" type="button" data-id="${product.id}">
                        Adicionar ao carrinho
                    </button>
                </div>
            `;

            productsGrid.appendChild(card);
        }
    );

    //==================================================  BOTÃO VER MAIS  ==================================================

    if (loadMoreProducts) {

        if (filteredProducts.length > initialProducts) {
            loadMoreProducts.style.display = "inline-flex";

            if (showAll) {
                loadMoreProducts.textContent =
                    "Mostrar menos";
            } else {
                loadMoreProducts.textContent =
                    "Ver mais produtos";
            }
        } else {
            loadMoreProducts.style.display = "none";
        }
    }

    // ==================================================  BOTÕES ADICIONAR AO CARRINHO  ==================================================

    const addButtons =
        productsGrid.querySelectorAll(".add-cart");

    addButtons.forEach(
        function (button) {
            button.addEventListener(
                "click",
                function () {
                    const productId =
                        Number(button.dataset.id);
                    openSizeModal(productId);
                }
            );
        }
    );
}

if (loadMoreProducts) {
    loadMoreProducts.addEventListener("click",
        function () {
            const showingAll =
                productsGrid.dataset.showAll === "true";
            productsGrid.dataset.showAll =
                showingAll ? "false" : "true";
            const activeCategory = document.querySelector(".category-card.active");
            const category = activeCategory ? activeCategory.dataset.category : "todos";

            renderProducts(category);
        }
    );
}

// ======================================================  ABRIR MODAL  ======================================================

function openSizeModal(productId) {
    const product = products.find(function (item) {
        return item.id === productId;
    });

    if (!product) { return; }

    //====================================  BOLSAS E ACESSÓRIÓRIOS SÃO TAMANHO ÚNICO  =======================================
    if (product.categories && (
        product.categories.includes("bolsa") ||
        product.categories.includes("acessorio"))
    ) {
        const existingProduct = cart.find(function (item) {
            return (
                item.id === product.id &&
                item.size === "Tamanho Único"
            );
        });

        if (existingProduct) {
            existingProduct.quantity += 1;
        } else {
            cart.push({
                id: product.id,
                name: product.name,
                category: product.category,
                price: product.price,
                image: product.image,
                size: "Tamanho Único",
                colo: "Não se aplica",
                busto: "Não se aplica",
                cintura: "Não se aplica",
                quantity: 1
            });
        }
        updateCart();
        animateCart();
        return;
    }

    //============================================  PRODUTOS QUE POSSUEM TAMANHO  ===========================================
    selectedProduct = product;
    selectedSize = null;

    if (modalProductName) {
        modalProductName.textContent =
            product.name;
    }

    resetSizeModal();

    sizeModal.classList.add("open");
    sizeModal.setAttribute(
        "aria-hidden",
        "false"
    );

    document.body.style.overflow = "hidden";
}

// ======================================================  FECHAR MODAL  ======================================================

function closeSizeSelectionModal() {
    if (!sizeModal) { return; }

    sizeModal.classList.remove("open");
    sizeModal.setAttribute("aria-hidden", "true");
    selectedProduct = null;
    selectedSize = null;
    document.body.style.overflow = "";
}

// ======================================================  RESETAR MODAL  ======================================================

function resetSizeModal() {

    sizeButtons.forEach(function (button) {
        button.classList.remove("active");
    }
    );

    if (coloInput) { coloInput.value = ""; coloInput.disabled = true; }

    if (bustoInput) { bustoInput.value = ""; bustoInput.disabled = true; }

    if (cinturaInput) { cinturaInput.value = ""; cinturaInput.disabled = true; }

    if (customSizeMessage) {
        customSizeMessage.classList.remove(
            "visible"
        );
    }
}

// ======================================================  SELECIONAR TAMANHO  ======================================================

sizeButtons.forEach(
    function (button) {

        button.addEventListener(
            "click",
            function () {
                sizeButtons.forEach(
                    function (item) {
                        item.classList.remove("active");
                    }
                );

                button.classList.add("active");

                selectedSize =
                    button.dataset.size;

                if (selectedSize === "Sob Medida") {
                    enableCustomMeasurements();
                } else {
                    loadSizeMeasurements(
                        selectedSize
                    );
                }
            }
        );
    }
);

// =======================================================  CARREGAR MEDIDAS  ======================================================

function loadSizeMeasurements(size) {
    const measurements =
        SIZE_MEASUREMENTS[size];

    if (!measurements) {
        return;
    }

    coloInput.disabled = true;
    bustoInput.disabled = true;
    cinturaInput.disabled = true;
    coloInput.value =
        measurements.colo || "";
    bustoInput.value =
        measurements.busto || "";
    cinturaInput.value =
        measurements.cintura || "";
    customSizeMessage.classList.remove(
        "visible"
    );
}

// =====================================================  SOB MEDIDA  ======================================================

function enableCustomMeasurements() {

    coloInput.disabled = false;
    bustoInput.disabled = false;
    cinturaInput.disabled = false;
    coloInput.value = "";
    bustoInput.value = "";
    cinturaInput.value = "";
    customSizeMessage.classList.add("visible");
    coloInput.focus();
}

// ======================================================  ADICIONAR AO CARRINHO  ======================================================

if (modalAddButton) {
    modalAddButton.addEventListener(
        "click",
        function () {
            if (!selectedProduct) { return; }
            if (!selectedSize) {
                alert("Selecione um tamanho antes de continuar.");
                return;
            }
            const colo =
                coloInput.value.trim();
            const busto =
                bustoInput.value.trim();
            const cintura =
                cinturaInput.value.trim();
            if (
                selectedSize === "Sob Medida" &&
                (!colo || !busto || !cintura)
            ) {
                alert(
                    "Preencha todas as medidas antes de adicionar a peça."
                );

                return;
            }

            const finalColo =
                colo || "Medida padrão";
            const finalBusto =
                busto || "Medida padrão";
            const finalCintura =
                cintura || "Medida padrão";
            const existingProduct =
                cart.find(
                    function (item) {

                        return (
                            item.id === selectedProduct.id &&
                            item.size === selectedSize &&
                            item.colo === finalColo &&
                            item.busto === finalBusto &&
                            item.cintura === finalCintura
                        );
                    }
                );

            if (existingProduct) {
                existingProduct.quantity += 1;
            } else {
                cart.push({
                    id: selectedProduct.id,
                    name: selectedProduct.name,
                    category: selectedProduct.category,
                    price: selectedProduct.price,
                    image: selectedProduct.image,
                    size: selectedSize,
                    colo: finalColo,
                    busto: finalBusto,
                    cintura: finalCintura,
                    quantity: 1
                });
            }
            updateCart();
            animateCart();
            closeSizeSelectionModal();
        }
    );
}

// ======================================================  ATUALIZAR CARRINHO  ======================================================

function updateCart() {
    let totalQuantity = 0;
    let totalPrice = 0;
    cart.forEach(
        function (item) {
            totalQuantity += item.quantity;
            totalPrice +=
                item.price *
                item.quantity;
        }
    );

    if (cartCount) {

    cartCount.textContent = totalQuantity;

    cartCount.classList.remove("cart-count-pop");

    void cartCount.offsetWidth;

    cartCount.classList.add("cart-count-pop");
}

    if (cartTotal) {
        cartTotal.textContent = formatPrice(totalPrice);
    }

    if (!cartItems) { return; }

    cartItems.innerHTML = "";

//=============================================  CARRINHO VAZIO  =================================================

    if (cart.length === 0) {
        cartItems.innerHTML =
        '<p class="empty-cart">Seu carrinho está vazio.</p>';
        return;
    }

//===========================================================  PRODUTOS  ==========================================

    cart.forEach(
        function (item, index) {
            const cartItem =
                document.createElement("div");
            cartItem.className =
                "cart-item";

            const itemContainer =
                document.createElement("div");

            const title =
                document.createElement("h4");

            title.textContent =
                item.name;

            const size =
                document.createElement("small");

            size.textContent = "Tamanho: " + item.size;

            const colo =
                document.createElement("small");

            colo.textContent = "Colo: " + item.colo;

            const busto =
                document.createElement("small");

            busto.textContent = "Busto: " + item.busto;

            const cintura =
                document.createElement("small");

            cintura.textContent = "Cintura: " + item.cintura;

            const quantity =
                document.createElement("small");

            quantity.textContent = "Quantidade: " + item.quantity;

            const price =
                document.createElement("small");

            price.textContent = formatPrice(item.price * item.quantity);

            const removeButton = document.createElement("button");

            removeButton.type = "button";
            removeButton.className = "remove-item";
            removeButton.dataset.index = index;
            removeButton.textContent = "Remover";

            itemContainer.appendChild(title);
            itemContainer.appendChild(size);
            itemContainer.appendChild(colo);
            itemContainer.appendChild(busto);
            itemContainer.appendChild(cintura);
            itemContainer.appendChild(quantity);
            itemContainer.appendChild(price);

            cartItem.appendChild(itemContainer);

            cartItem.appendChild(removeButton);

            cartItems.appendChild(cartItem);
        }
    );

//=========================================  BOTÕES REMOVER  =======================================

    const removeButtons = cartItems.querySelectorAll(".remove-item");

    removeButtons.forEach(
        function (button) {

            button.addEventListener("click", function () {
                    const index = Number(button.dataset.index);
                    removeFromCart(index);
                }
            );
        }
    );
}

// ======================================================  REMOVER DO CARRINHO  ======================================================

function removeFromCart(index) {

    if ( index < 0 || index >= cart.length) {return;}

    if (cart[index].quantity > 1) {cart[index].quantity -= 1;} 
    else {cart.splice(index, 1);}

    updateCart();
}
// ======================================================  ABRIR CARRINHO  ======================================================

function openCart() {
    if (!cartOverlay) {return;}

    cartOverlay.classList.add("open");
    cartOverlay.setAttribute("aria-hidden", "false");

    document.body.classList.add("cart-open");
}

// ======================================================  ANIMAÇÃO DO CARRINHO  ======================================================

function animateCart() {

    if (!openCartButton) {return;}

    openCartButton.classList.remove("cart-bounce");

    // Reinicia a animação mesmo quando clicado várias vezes
    void openCartButton.offsetWidth;

    openCartButton.classList.add("cart-bounce");
    setTimeout(function () {openCartButton.classList.remove("cart-bounce");},500);
}

// ======================================================  FECHAR CARRINHO  ======================================================

function closeCart() {
    if (!cartOverlay) {return;}
    cartOverlay.classList.remove("open");

    cartOverlay.setAttribute("aria-hidden","true");

    document.body.classList.remove("cart-open");
}

// ======================================================  BOTÃO ABRIR CARRINHO  ======================================================

if (openCartButton) {
    openCartButton.addEventListener("click",function () {openCart();});
}

// ======================================================  BOTÃO FECHAR CARRINHO  ======================================================

if (closeCartButton) {
    closeCartButton.addEventListener("click", function () {closeCart();});
}

// ======================================================  CLICAR FORA DO CARRINHO  ======================================================

if (cartOverlay) {

    cartOverlay.addEventListener("click", function (event) {
            if (event.target === cartOverlay) {closeCart();}
        }
    );
}

// ======================================================  FECHAR MODAL  ======================================================

if (closeSizeModal) {

    closeSizeModal.addEventListener("click",function () {
            closeSizeSelectionModal();
        }
    );
}

// ======================================================  CLICAR FORA DO MODAL  ======================================================

if (sizeModal) {

    sizeModal.addEventListener("click",function (event) {

            if (event.target === sizeModal) {closeSizeSelectionModal();}
        }
    );
}

// ======================================================  ESC FECHA TUDO  ======================================================

document.addEventListener("keydown",function (event) {

        if (event.key === "Escape") {

            closeCart();

            closeSizeSelectionModal();
        }
    }
);

// ======================================================  FILTRO DE CATEGORIAS  ======================================================

const categoryButtons = document.querySelectorAll(".category-card");

categoryButtons.forEach(
    function (button) {

        button.addEventListener("click",function () {

                categoryButtons.forEach(function (item) {
                        item.classList.remove("active");
                    }
                );

                button.classList.add("active");

                const category = button.getAttribute("data-category");

                renderProducts(category);
            }
        );
    }
);

// ======================================================  FINALIZAR PELO WHATSAPP  ======================================================

if (checkoutButton) {

    checkoutButton.addEventListener("click",function () {

            if (cart.length === 0) {

                alert("Seu carrinho está vazio.");

                return;
            }

            let message =
                "Olá! Gostaria de fazer um pedido:\n\n";

            let total = 0;

            cart.forEach(
                function (item) {

                    const itemTotal =
                        item.price *
                        item.quantity;

                    message +=
                        "• " +
                        item.name +
                        "\n";

                    message +=
                        "Tamanho: " +
                        item.size +
                        "\n";

                    message +=
                        "Colo: " +
                        item.colo +
                        "\n";

                    message +=
                        "Busto: " +
                        item.busto +
                        "\n";

                    message +=
                        "Cintura: " +
                        item.cintura +
                        "\n";

                    message +=
                        "Quantidade: " +
                        item.quantity +
                        "\n";

                    message +=
                        "Valor: " +
                        formatPrice(itemTotal) +
                        "\n\n";

                    total += itemTotal;
                }
            );

            message +=
                "TOTAL: " + formatPrice(total);

            const whatsappURL = "https://wa.me/" + WHATSAPP_NUMBER + "?text=" +
                encodeURIComponent(message);

            window.open(whatsappURL,"_blank");
        }
    );
}

// ======================================================  NEWSLETTER  ======================================================


// ======================================================  MENU MOBILE  ======================================================

if (menuButton && nav) {

    menuButton.addEventListener("click", function () {

            nav.classList.toggle("mobile-open");
        }
    );

    const navLinks = nav.querySelectorAll("a");

    navLinks.forEach(
        function (link) {

            link.addEventListener("click", function () {

                    nav.classList.remove("mobile-open");
                }
            );
        }
    );
}

// ======================================================  INICIAR SITE  ======================================================

renderProducts("todos");
updateCart();
