import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

async function main() {
    
    // consultas prisma...

    // crear usuario
    await prisma.user.create({
        data: {
            name: 'Alice',
            email: 'alice@prisma.io',
            posts: {
                create: { title: 'Hello World' },
            },
            profile: {
                create: { bio: 'I like turtles' },
            },
        },
    })

    // actualizar
    await prisma.post.update({
        where: { id: 1 },
        data: { published: true }
    });


    // listar usuario
    const allUsers = await prisma.user.findMany({
        include: {
            posts: true,
            profile: true,
        }
    })
    
    console.dir(allUsers, { depth: null })
    
}

main()
    .then(async () => {
        await prisma.$disconnect()
    }).catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })