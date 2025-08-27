import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Poblar Roles
  const roles = await prisma.role.createMany({
    data: [
      { name: 'Administrador', description: 'Control total del sistema' },
      { name: 'Entrenador', description: 'Gestiona entrenamientos y clientes' },
      { name: 'Fisioterapeuta', description: 'Gestiona sesiones de fisioterapia' },
      { name: 'Cliente', description: 'Usuario que contrata los servicios' }
    ],
    skipDuplicates: true // evita duplicados si corres varias veces
  });

  // Poblar Servicios
  const services = await prisma.service.createMany({
    data: [
      { name: 'Entrenamiento Personalizado', description: 'Plan de entrenamiento individual' },
      { name: 'Fisioterapia', description: 'Terapias físicas personalizadas' },
      { name: 'Evaluación Física', description: 'Análisis inicial del estado físico' }
    ],
    skipDuplicates: true
  });

  console.log('Datos iniciales insertados:', { roles, services });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
