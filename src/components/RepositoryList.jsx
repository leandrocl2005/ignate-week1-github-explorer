import { RepositoryItem } from "./RepositoryItem";

export function RepositoryList() {
    return (
        <section className="repository-list">
            <h1>Lista de repositórios</h1>
            <ul>
                <RepositoryItem repository={{
                    name: "Teste",
                    description: "Este é um teste",
                    link: "#"
                }} />
                <RepositoryItem repository={{
                    name: "Teste",
                    description: "Este é um teste",
                    link: "#"
                }} />
            </ul>
        </section>
    )
}