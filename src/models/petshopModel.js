import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const findAll = async () => {
    return await prisma.pet.findMany({
        orderBy: { nome: 'asc' }
    });
};

export const findById = async (id) => {
    return await prisma.pet.findUnique({
        where: { id: Number(id) }
    })
};

export const create = async (data) => {
    return await prisma.pet.create({
        data: {
            nome:data.nome,
            especie:data.especie,
            idade:data.idade,
            dono: data.dono,
        }
    })

}