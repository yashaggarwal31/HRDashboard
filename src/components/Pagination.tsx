import styles from "./Pagination.module.css";

const Pagination = ({ items, pageSize, currentPage, onPageChange }: any) => {
  console.log("items -> ", items);
  const pagesCount = Math.ceil(items / pageSize);

  if (pagesCount === 1) return null;
  const pages = Array.from({ length: pagesCount }, (_, i) => i + 1);

  return (
    <div>
      <ul className={styles.pagination}>
        {pages.map((page) => (
          <li
            key={page}
            className={
              page === currentPage ? styles.pageItemActive : styles.pageItem
            }
            onClick={() => onPageChange(page)}
          >
            <a className={styles.pageLink}>{page}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Pagination;
