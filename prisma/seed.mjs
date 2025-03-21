import { PrismaClient } from '@prisma/client';
import * as fs from 'fs/promises';

const prisma = new PrismaClient();
// Lee el contenido del archivo SQL
const sql = await fs.readFile('./data_edemy_dev.sql', 'utf8');

async function main() {
  try {
    

    // Divide el SQL en bloques por cada `INSERT INTO`
    const insertStatements = sql.split(/INSERT INTO\s+(\w+)\s+/).filter(Boolean);

    for (const statement of insertStatements) {
      const tableNameMatch = statement.match(/INSERT INTO\s+`?(\w+)`?/);
      if (!tableNameMatch) {
        console.log('No se pudo identificar una tabla en:', statement);
        continue;
      }

      const tableName = tableNameMatch[1];
      console.log(`Procesando tabla: ${tableName}`);

      const valuesMatch = statement.match(/VALUES\s*([\s\S]*)/);
      if (!valuesMatch) {
        console.log(`No se encontraron valores en la instrucción: ${statement}`);
        continue;
      }

      const valuesString = valuesMatch[1].trim();
      const rows = valuesString
        .split('),')
        .map((row) => row.replace(/[()]/g, '').trim())
        .map((row) => row.split(','));
console.log('***', tableName)
      if (tableName === "_Asset") {
        for (const row of rows) {
          const assetData = {
            id: parseInt(row[0].trim(), 10),
            courseId: parseInt(row[1].trim(), 10),
            type: row[2].trim().replace(/'/g, ''),
            title: row[3].trim().replace(/'/g, ''),
            file_url: row[4].trim().replace(/'/g, ''),
            video_url: row[5].trim().replace(/'/g, ''),
            video_length: parseFloat(row[6].trim()),
            is_preview: row[7].trim() === '1',
            created_at: new Date(row[8].trim().replace(/'/g, '')),
          };

          await prisma.asset.create({ data: assetData });
          console.log(`Registro guardado en Asset: ${assetData.title}`);
        }
      }
      if (tableName === "Course") {
        for (const row of rows) {
          const courseData = {
            id: parseInt(row[0].trim(), 10),
            userId: parseInt(row[1].trim(), 10),
            category: row[2].trim().replace(/'/g, ''),
            title: row[3].trim().replace(/'/g, ''),
            slug: row[4].trim().replace(/'/g, ''),
            description: row[5].trim().replace(/'/g, ''),
            regular_price: parseFloat(row[6].trim()),
            before_price: parseFloat(row[7].trim()),
            lessons: parseInt(row[8].trim(), 10),
            duration: row[9].trim().replace(/'/g, ''),
            image: row[10].trim().replace(/'/g, ''),
            access_time: parseInt(row[11].trim(), 10),
            requirements: row[12].trim().replace(/'/g, ''),
            what_you_will_learn: row[13].trim().replace(/'/g, ''),
            who_is_this_course_for: row[14].trim().replace(/'/g, ''),
            status: row[15].trim().replace(/'/g, ''),
            in_home_page: row[16].trim() === '1',
            in_home_page_set_at: row[17] ? new Date(row[17].trim().replace(/'/g, '')) : null,
            created_at: new Date(row[18].trim().replace(/'/g, '')),
          };

          await prisma.course.create({ data: courseData });
          console.log(`Registro guardado en Course: ${courseData.title}`);
        }
      } 
       if (tableName === "Enrolment") {
        for (const row of rows) {
          const enrolmentData = {
            id: parseInt(row[0].trim(), 10),
            userId: parseInt(row[1].trim(), 10),
            courseId: parseInt(row[2].trim(), 10),
            order_number: row[3].trim().replace(/'/g, ''),
            price: parseFloat(row[4].trim()),
            paymentId: row[5].trim().replace(/'/g, ''),
            payment_status: row[6].trim().replace(/'/g, ''),
            status: row[7].trim().replace(/'/g, ''),
            payment_via: row[8].trim().replace(/'/g, ''),
            created_at: new Date(row[9].trim().replace(/'/g, '')),
            updated_at: new Date(row[10].trim().replace(/'/g, '')),
          };

          await prisma.enrolment.create({ data: enrolmentData });
          console.log(`Registro guardado en Enrolment: ${enrolmentData.order_number}`);
        }
      } 
       if (tableName === "Profile") {
        for (const row of rows) {
          const profileData = {
            id: parseInt(row[0].trim(), 10),
            userId: parseInt(row[1].trim(), 10),
            bio: row[2].trim().replace(/'/g, ''),
            gender: row[3].trim().replace(/'/g, ''),
            address: row[4].trim().replace(/'/g, ''),
            phone: row[5].trim().replace(/'/g, ''),
            website: row[6].trim().replace(/'/g, ''),
            twitter: row[7].trim().replace(/'/g, ''),
            facebook: row[8].trim().replace(/'/g, ''),
            linkedin: row[9].trim().replace(/'/g, ''),
            youtube: row[10].trim().replace(/'/g, ''),
          };

          await prisma.profile.create({ data: profileData });
          console.log(`Registro guardado en Profile: ${profileData.bio}`);
        }
      } 
       if (tableName === "Review") {
        for (const row of rows) {
          const reviewData = {
            id: parseInt(row[0].trim(), 10),
            rating: parseFloat(row[1].trim()),
            comment: row[2].trim().replace(/'/g, ''),
            userId: parseInt(row[3].trim(), 10),
            courseId: parseInt(row[4].trim(), 10),
            created_at: new Date(row[5].trim().replace(/'/g, '')),
            updated_at: new Date(row[6].trim().replace(/'/g, '')),
          };

          await prisma.review.create({ data: reviewData });
          console.log(`Registro guardado en Review: ${reviewData.comment}`);
        }
      } 
      if (tableName === "User") {
        for (const row of rows) {
          const userData = {
            id: parseInt(row[0].trim(), 10),
            name: row[1].trim().replace(/'/g, ''),
            email: row[2].trim().replace(/'/g, ''),
            emailVerified: row[3] ? new Date(row[3].trim().replace(/'/g, '')) : null,
            image: row[4].trim().replace(/'/g, ''),
            hashedPassword: row[5].trim().replace(/'/g, ''),
            role: row[6].trim().replace(/'/g, ''),
            is_instructor: row[7].trim() === '1',
            created_at: new Date(row[8].trim().replace(/'/g, '')),
            updated_at: new Date(row[9].trim().replace(/'/g, '')),
            designation: row[10].trim().replace(/'/g, ''),
          };

          await prisma.user.create({ data: userData });
          console.log(`Registro guardado en User: ${userData.name}`);
        }
      } else {
        console.log(`Tabla ${tableName} no está configurada para ser procesada.`);
      }
      // ... (otros casos)
    }


  } catch (error) {
    console.error('Error procesando el seed:', error);
  } finally {
    await prisma.$disconnect();
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
