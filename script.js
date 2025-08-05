class Musica {
    constructor(titulo, anoLancamento) {
        this.titulo = titulo;
        this.anoLancamento = anoLancamento;
    }

    informar() {
        return `"${this.titulo}" foi lançada em ${this.anoLancamento}.`;
    }
}

class Album extends Musica {
    constructor(titulo, anoLancamento, faixas) {
        super(titulo, anoLancamento);
        this.faixas = faixas;
    }

    listarFaixas() {
        let lista = `O álbum "${this.titulo}" contém as seguintes faixas:\n`;
        this.faixas.forEach(faixa => {
            lista += `- ${faixa}\n`;
        });
        return lista;
    }
}

class Single extends Musica {
    constructor(titulo, anoLancamento, ehDeAlbum) {
        super(titulo, anoLancamento);
        this.ehDeAlbum = ehDeAlbum;
    }
    
    informarDetalhes() {
        if (this.ehDeAlbum) {
            return `"${this.titulo}" é um single de sucesso que também está em um de seus álbuns.`;
        } else {
            return `"${this.titulo}" é um single avulso.`;
        }
    }
}

const artista = "Tom Odell";
console.log(`Explorando as obras do artista: ${artista}\n`);

const longWayDown = new Album(
    "Long Way Down",
    2013,
    ["Grow Old with Me", "I Know", "Another Love", "Hold Me"]
);

const anotherLove = new Single(
    "Another Love",
    2013,
    true
);

const monsters = new Album(
    "monsters",
    2021,
    ["Numb", "Monster v.1", "Money", "Tears That Never Dry"]
);

console.log(longWayDown.informar());
console.log(longWayDown.listarFaixas());
console.log('---');

console.log(anotherLove.informar());
console.log(anotherLove.informarDetalhes());
console.log('---');

console.log(monsters.informar());
console.log(monsters.listarFaixas());
