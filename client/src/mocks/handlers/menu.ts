import { rest } from "msw";

// article 리스트
export const getMenuList = rest.get(
  `${process.env.REACT_APP_API}/menu/list`,
  async (req, res, ctx) =>
    res(
      ctx.json([
        "전체",
        "가공",
        "신선",
        "대한민국수산대전",
        "시니어 WEEK",
        "마음은 가볍게 준비는 완벽히",
        "SUMMER 클e어런스",
        "금주의 초특가 찬스",
      ])
    )
);
