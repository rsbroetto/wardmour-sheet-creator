const defaultHero = {
        name: '',
        attributes: {
            FORT: 1,
            AGIL: 1,
            MENT: 1            
        },
        metaAttributes: {
            EVA: 4,
            ARMA: 0,
            PV: Math.floor(Math.random() * 6) + 2,
            PM: Math.floor(Math.random() * 6) + 2,
            FORTB: 0,
            AGILB: 0,
            MENTB: 0,
        },
        specie: {
            title: '',
            bonuses: []
        },
        archetype: {
            title: '',
            bonuses: [],
            equipament: []
        },
        skills: [],
        maxPoints: 6,
        maxSkills: 2,
        arcane: []
    }

    export default defaultHero