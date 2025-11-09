import "./App.css";
import Header from "./components/header/Header";
import PopNewCard from "./components/popups/PopNewCard/PopNewCard";
import PopBrowse from "./components/popups/PopBrowse/PopBrowse";
import Main from "./components/main/Main";
import PopExit from "./components/popups/PopExit/PopExit";
function App() {
  const columns = [
    {
      id: 1,
      title: "Без статуса",
      cards: [
        {
          id: "c1",
          category: "Web Design",
          colorClass: "_orange",
          title: "Название задачи",
          date: "30.10.23",
        },
        {
          id: "c2",
          category: "Research",
          colorClass: "_green",
          title: "Название задачи",
          date: "30.10.23",
        },
        {
          id: "c3",
          category: "Web Design",
          colorClass: "_orange",
          title: "Название задачи",
          date: "30.10.23",
        },
        {
          id: "c4",
          category: "Copywriting",
          colorClass: "_purple",
          title: "Название задачи",
          date: "30.10.23",
        },

        {
          id: "c5",
          category: "Research",
          colorClass: "_green",
          title: "Название задачи",
          date: "30.10.23",
        },
      ],
    },
    {
      id: 2,
      title: "Нужно сделать",
      cards: [
        {
          id: "c1",
          category: "Research",
          colorClass: "_green",
          title: "Название задачи",
          date: "30.10.23",
        },
      ],
    },
    {
      id: 3,
      title: "В работе",
      cards: [
        {
          id: "c1",
          category: "Research",
          colorClass: "_green",
          title: "Название задачи",
          date: "30.10.23",
        },
        {
          id: "c2",
          category: "Copywriting",
          colorClass: "_purple",
          title: "Название задачи",
          date: "30.10.23",
        },
        {
          id: "c3",
          category: "Web Design",
          colorClass: "_orange",
          title: "Название задачи",
          date: "30.10.23",
        },
      ],
    },
    {
      id: 4,
      title: "Тестирование",
      cards: [
        {
          id: "c1",
          category: "Research",
          colorClass: "_green",
          title: "Название задачи",
          date: "30.10.23",
        },
      ],
    },
    {
      id: 5,
      title: "Готово",
      cards: [
        {
          id: "c1",
          category: "Research",
          colorClass: "_green",
          title: "Название задачи",
          date: "30.10.23",
        },
      ],
    },
  ];

  return (
    <>
      <div className="wrapper">
        {/*pop-up start */}

        <PopExit />

        <PopNewCard />

        <PopBrowse />

        {/* pop-up end */}

        <Header />
        <Main columns={columns} />
      </div>

      <script src="js/script.js"></script>
    </>
  );
}

export default App;
