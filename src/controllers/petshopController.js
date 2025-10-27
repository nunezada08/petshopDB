import * as petshopModel from './../models/petshopModel.js';

export const listarTodosPets = async (req, res) => {
    try {
        const pets = await petshopModel.findAll();

        if (!pets || pets.length === 0) {
            res.status(404).json({
                total: pets.length,
                mensagem: 'Nenhum pet encontrado.'
            })
        }

        res.status(200).json({
            total: pets.length,
            mensagem: 'Lista de pet',
            pets
        })
    } catch (error) {
        res.status(500).json({
            erro: 'Erro interno no servidor.',
            detalhes: error.message,
            status: 500
        })

    }
};

export const buscarPetPorId = async (req,res) => {
    try {
        const { id } = req.params;
        const pet = await petshopModel.findById(id);

        if (!pet) {
            return res.status(404).json({
                erro: 'Pet não encontrado.',
                mensagem: "Verifique se o ID do pet existe.",
                id: id,
            })
        }

        
        res.status(200).json({
        mensagem: "Pet encontrado com sucesso.",
        pet
        })

    } catch (error) {
        res.status(500).json({
            erro: 'Erro ao buscar pet por ID.',
            detalhes: error.message,
            status: 500
        })
    }
}

export const criarPet = async (req, res) => {
    try {
        const { nome, especie, idade, dono } = req.body;

        const dado = req.body;

        const camposObrigatorios = ['nome', 'especie', 'idade', 'dono'];

        const faltando = camposObrigatorios.filter(campo => !dado[campo]);

        if (faltando.length > 0) {
            return res.status(400).json({
                erro: `Os seguintes campos são obrigatórios: ${faltando.join(', ')}.`
            });
        }

        const especiesValidas = ['Cachorro', 'Gato', 'Pássaro', 'Peixe'];
        if (!especiesValidas.includes(especie)) {
            return res.status(400).json({
                erro: `Especie inválida.`,
                especiesValidas
            })
        }

        const novoPet = await petshopModel.create(dado);

    res.status(201).json({
        mensagem: 'Novo pet criado com sucesso.',
        pet: novoPet
    })

    } catch (error) {
        res.status(500).json({
            erro: 'Erro ao adicionar um pet.',
            detalhes: error.message
        })
    }
}