import { es } from "@faker-js/faker";
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

export const deletePet = async (id) => {
    return await prisma.pet.delete({
        where: { id: Number(id)}
    });
}

export const updatePet = async (id, data) => {
    return await prisma.pet.update({
        where: { id: Number(id)},
        data: {
            ...(data.nome && { nome: data.nome }),
            ...(data.especie && { especie: data.especie }),
            ...(data.idade && { idade: Number(data.idade) }),
            ...(data.dono && { dono: data.dono }),
        }
    })

}