import prisma from "./prismacClient.js";

export async function insertInfo(uuid, menu, old, sex, race) {
  if (!uuid) throw new Error("잘못된 정보입니다.");
  const paymentInfo = await prisma.users.create({
    data: {
      menu: menu,
      old: old,
      sex: sex,
      race: race,
    },
  });
}
