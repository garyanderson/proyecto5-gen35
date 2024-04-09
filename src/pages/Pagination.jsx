import { useState, useEffect, useRef } from "react";
import "../components/PokedexPage/style/Pagination.css";
import start from "../../public/images/start.png";
import prev from "../../public/images/prev.png";
import next from "../../public/images/next.png";
import end from "../../public/images/end.png";

const Pagination = ({
  pokemons,
  startIndex,
  endIndex,
  quantyPage,
  setPage,
  page,
  setPokePerPage,
  pokePerPage,
}) => {
  const [blockPage, setBlockPage] = useState(1);
  const [pagesPerBlock, setpagesPerBlock] = useState(5);

  const initialPageBlock = (blockPage - 1) * pagesPerBlock;
  const endPageBlock = initialPageBlock + pagesPerBlock;
  const endBlock = Math.ceil(pokemons?.length / (pagesPerBlock * pokePerPage))

  const numberPages = useRef()

  useEffect(() => {
    setBlockPage(Math.ceil(page / pagesPerBlock));
  }, [page]);

  const arrPages = [];
  for (let x = 1; x <= quantyPage; x++) {
    arrPages.push(x);
  }

  console.log(setPokePerPage);

  const changePage = (pageNumber) => setPage(pageNumber);

  const handleStart = () => {
    setPage(1)
  }

  const prevBlock = () => {
    setBlockPage(blockPage-1)
  }

  const handlePrev = () => {
    setPage(page - 1);
  };

  const handleNext = () => {
    setPage(page + 1);
  };

  const nextBlock = () => {
    setBlockPage(blockPage+1)
  }

  const handleEnd = () => {
    setPage(quantyPage)
  }

  const handleSubmit = e => {
    e.preventDefault()
    setPokePerPage(numberPages.current.value)
    setPage(1)
  }
 console.log(endBlock)
  return (
    <div className="nav">
      <ul className="pokemons__list gap__page">
        <button className="nav__start btn" disabled={page === 1 && true} onClick={handleStart}>
          <img src={start} alt="" />
        </button>
        <button className="nav__prev btn" disabled={page === 1 && true} onClick={handlePrev}>
          <img src={prev} alt="" />
        </button>
        <li onClick={prevBlock} className={`${blockPage === 1 && 'inactive'}`}>...</li>
        {
            
        arrPages.slice(initialPageBlock, endPageBlock).map((pageNumber) => (
          <li
            className={`${pageNumber === page && "active__page"}`}
            onClick={() => changePage(pageNumber)}
            key={pageNumber}
          >
            {pageNumber}
          </li>
        ))
        }
        <li onClick={nextBlock} className={`${blockPage === endBlock && 'inactive'}`}>...</li>
        <button className="nav__next btn" disabled={page === quantyPage && true} onClick={handleNext}>
          <img src={next} alt="" />
        </button>
        <button className="nav__end btn" disabled={page === quantyPage && true} onClick={handleEnd}>
          <img src={end} alt="" />
        </button>
      </ul>
      <form className="nav__form" onSubmit={handleSubmit}>
        <label className="nav__label">Cards</label>
        <input className="nav__input" type="number" ref={numberPages}/>
        <button className="nav__btn btn" >
          submit
        </button>
      </form>
    </div>
  );
};

export default Pagination;
