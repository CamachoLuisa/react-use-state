import Accordion from "./Accordion";

export default function AccordionList() {
    const faqs = [
        {
            title: "HTML",
            content: "HTML (HyperTeext Markup Language) è il linguaggio standard per creare pagine e applicazioni web. Struttura il contenuto web e fornisce elementi di base come titoli, paragrafi e immagini"
        },
        {
            title:"CSS",
            content: "CSS (Cascading Style Sheets) è un linguaggio di stile utilizzato per descrivere la presentazione di un documento scritto in HTML o XML Controlla il layout. i colori, i caratteri e l'aspetto complessivo di una pagina web"
        },
        {
            title: "JavaScript",
            content: ""
        },
        {
            title: "Node.js",
            content: "Node.js è un ambiente di runtime JavaScript lato server che permette di utilizzare JavaScript anche sul backend, consentendo a gli svilupppatori di usare lo stesso linguagio sia sul client che sul server"
        },
        {
            title: "Express",
            content: ""
        },
        {
            title: "ReactJS",
            content: ""
        },
    ];

    if (faqs.lenght === 0) {
        return <h2> non ci sono</h2>
    }

    return (
        <div className="accordion-list">
            {faqs.map((item, index) => (
                <Accordion
                key={index}
                title={item.title}
                content={item.content}
                />
            )
        )}
        </div>
    )}