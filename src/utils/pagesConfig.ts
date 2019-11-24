import roleTypes from "utils/models/roleTypes";

export const pagesConfig: {
  [key: number]: { link: string; caption: string }[];
} = {
  [roleTypes.Client]: [
    {
      link: "/search",
      caption: "Поиск"
    },
    {
      link: "/articles",
      caption: "Справочник"
    }
  ],
  [roleTypes.Operator]: [
    {
      link: "/search",
      caption: "Поиск"
    },
    {
      link: "/articles",
      caption: "Справочник"
    },
    {
      link: "/add-relation",
      caption: "Добавить запрос"
    }
  ],
  [roleTypes.ProviderAdmin]: [
    {
      link: "/search",
      caption: "Поиск"
    },
    {
      link: "/profile",
      caption: "Профиль"
    },
    {
      link: "/set-kpi",
      caption: "KPI"
    },
    {
      link: "/requests",
      caption: "Обращения"
    },
    {
      link: "/kpi",
      caption: "Показатели"
    },
    {
      link: "/articles",
      caption: "Справочник"
    },
    {
      link: "/add-relation",
      caption: "Добавить запрос"
    },
    {
      link: "/news",
      caption: "Новости"
    }
  ]
};
