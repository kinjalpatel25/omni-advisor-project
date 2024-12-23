document.addEventListener('DOMContentLoaded', function() {
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');
    const advisorBoxes = document.querySelectorAll('.advisor-box');

    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            const tab = this.dataset.tab;

            // Toggle the active state for the clicked tab button
            if (this.classList.contains('active')) {
                this.classList.remove('active');
                document.getElementById(tab).classList.remove('active');
                this.closest('.advisor-box').classList.remove('active');
            } else {
                tabButtons.forEach(btn => btn.classList.remove('active'));
                tabContents.forEach(content => content.classList.remove('active'));
                advisorBoxes.forEach(box => box.classList.remove('active'));

                this.classList.add('active');
                document.getElementById(tab).classList.add('active');
                this.closest('.advisor-box').classList.add('active');
            }
        });
    });

    // Open the first tab by default
    tabButtons[0].classList.add('active');
    tabContents[0].classList.add('active');
    advisorBoxes[0].classList.add('active');
});

document.addEventListener('DOMContentLoaded', () => {
    const tabButtons = document.querySelectorAll('.tab-button');
    const containers = document.querySelectorAll('.container');

    let previousActiveTab = null;

    // Function to update header and main-content based on tabId
    function updateTab(tabId) {
        const activeContainer = document.querySelector('.container.active');
        if (activeContainer) {
            const header = activeContainer.querySelector('.header');
            const mainContent = activeContainer.querySelector('.main-content');
            const introParagraph = activeContainer.querySelector('.intro p');
            const questionParagraph = activeContainer.querySelector('.question-content p');
            const categoryCards = activeContainer.querySelectorAll('.category-card');
            const categoryCardParagraph = activeContainer.querySelectorAll('.category-card p');
            const categoryCardButton = activeContainer.querySelectorAll('.category-card .category-button');
            const questionButtons = activeContainer.querySelectorAll('.question-buttons .question-button');
            const messageInput = activeContainer.querySelector('.message-input input');

            // Update header background color
            switch (tabId) {
                case 'beauty':
                    header.style.backgroundColor = '#D75336';
                    break;
                case 'health':
                    header.style.backgroundColor = '#2B7939';
                    break;
                case 'industrial':
                    header.style.backgroundColor = '#78B13D';
                    mainContent.style.backgroundColor = '#1D1D1D';
                    introParagraph.style.color = '#FFFFFF';
                    introParagraph.style.backgroundColor = '#3D3D3D';
                    questionParagraph.style.color = '#FFFFFF';
                    questionParagraph.style.backgroundColor = '#3D3D3D';
                    messageInput.style.backgroundColor = '#1D1D1D';
                    messageInput.style.color = '#FFFFFF';                    
                    categoryCards.forEach(card => {
                        card.style.color = '#FFFFFF';
                        card.style.backgroundColor = '#3D3D3D';
                    });
                    categoryCardParagraph.forEach(cardPara => {
                        cardPara.style.color = '#FFFFFF';
                        cardPara.style.backgroundColor = '#3D3D3D';
                    });
                    categoryCardButton.forEach(btn => {
                        btn.style.color = '#FFFFFF';
                        btn.style.backgroundColor = '#1D1D1D';
                    });                    
                    questionButtons.forEach(queBtn => {
                        queBtn.style.color = '#FFFFFF';
                        queBtn.style.backgroundColor = 'transparent';
                    });                        
                    break;
                default:
                    header.style.backgroundColor = '#FFFFFF';
                    mainContent.style.backgroundColor = '#FFFFFF';
                    break;
            }            
        }
    }

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const tab = button.getAttribute('data-tab');
            const tabIndex = Array.from(tabButtons).indexOf(button);
            const previousTabIndex = previousActiveTab !== null ? Array.from(tabButtons).indexOf(document.querySelector(`.tab-button[data-tab="${previousActiveTab}"]`)) : null;

            tabButtons.forEach(btn => {
                btn.classList.remove('active');
            });
            button.classList.add('active');

            containers.forEach(container => {
                if (container.classList.contains(`${tab}-advisor`)) {
                    container.classList.add('active');
                    const header = container.querySelector('.header');
                    const mainContent = container.querySelector('.intro');
                    const productCat = container.querySelector('.product-categories');
                    const questions = container.querySelector('.questions');
                    const msgInput = container.querySelector('.message-input');

                    if (previousTabIndex !== null && tabIndex < previousTabIndex) {
                        header.classList.add('from-bottom');
                        mainContent.classList.add('from-bottom');
                        productCat.classList.add('from-bottom');
                        questions.classList.add('from-bottom');
                        msgInput.classList.add('from-bottom');
                    } else {
                        header.classList.add('from-top');
                        mainContent.classList.add('from-top');
                        productCat.classList.add('from-top');
                        questions.classList.add('from-top');
                        msgInput.classList.add('from-top');
                    }

                    void header.offsetWidth; 
                    void mainContent.offsetWidth;
                    void productCat.offsetWidth;
                    void questions.offsetWidth;
                    void msgInput.offsetWidth;

                    header.classList.add('active');
                    mainContent.classList.add('active');
                    productCat.classList.add('active');
                    questions.classList.add('active');
                    msgInput.classList.add('active');

                    updateTab(tab);
                } else {
                    const header = container.querySelector('.header');
                    const mainContent = container.querySelector('.intro');
                    const productCat = container.querySelector('.product-categories');
                    const questions = container.querySelector('.questions');
                    const msgInput = container.querySelector('.message-input');

                    container.classList.remove('active');
                    // header.classList.remove('active', 'from-top', 'from-bottom');
                    mainContent.classList.remove('active', 'from-top', 'from-bottom');
                    productCat.classList.remove('active', 'from-top', 'from-bottom');
                    questions.classList.remove('active', 'from-top', 'from-bottom');
                    msgInput.classList.remove('active', 'from-top', 'from-bottom');
                }
            });

            previousActiveTab = tab;
        });
    });

    // Open the first tab by default
    tabButtons[0].classList.add('active');
    containers[0].classList.add('active');
    previousActiveTab = tabButtons[0].getAttribute('data-tab');
    updateTab(previousActiveTab);
});