import { css } from "@/styled-system/css";
import {
  ArrowLongLeftIcon,
  ArrowLongRightIcon,
} from "@heroicons/react/20/solid";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) {
  const navStyle = css({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    borderTop: "1px solid",
    borderColor: { base: "gray.200" },
    px: { base: "16px", sm: "0" },
    pt: 6,
  });

  const linkStyle = css({
    display: "inline-flex",
    alignItems: "center",
    borderTop: "2px solid transparent",
    px: "16px",
    pt: "16px",
    fontSize: "14px",
    fontWeight: 500,
    color: { base: "gray.500" },
    cursor: "pointer",
    _hover: {
      borderColor: { base: "gray.300" },
      color: { base: "gray.700" },
    },
    _disabled: {
      cursor: "not-allowed",
      opacity: 0.5,
    },
  });

  const currentPageStyle = css({
    display: "inline-flex",
    alignItems: "center",
    borderTop: "2px solid",
    borderColor: { base: "orange.500" },
    px: "16px",
    pt: "16px",
    fontSize: "14px",
    fontWeight: 500,
    color: { base: "orange.600" },
  });

  const iconStyle = css({
    width: "20px",
    height: "20px",
    color: { base: "orange.400" },
    mx: "12px",
  });

  const generatePages = () => {
    const pages: (number | string)[] = [];
    const maxPagesToShow = 5;
    let startPage = Math.max(currentPage - 2, 1);
    let endPage = Math.min(startPage + maxPagesToShow - 1, totalPages);

    if (startPage > 1) pages.push(1, "...");
    for (let i = startPage; i <= endPage; i++) pages.push(i);
    if (endPage < totalPages) pages.push("...", totalPages);

    return pages;
  };

  const pages = generatePages();

  return (
    <nav className={navStyle}>
      {/* Previous */}
      <div className={css({ display: "flex", flex: 1, marginTop: "-1px" })}>
        <button
          className={linkStyle}
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          <ArrowLongLeftIcon aria-hidden="true" className={iconStyle} />
          Previous
        </button>
      </div>

      {/* Page numbers */}
      <div className={css({ display: "flex", marginTop: "-1px", gap: "4px" })}>
        {pages.map((page, idx) =>
          page === "..." ? (
            <span
              key={idx}
              className={css({
                display: "inline-flex",
                alignItems: "center",
                borderTop: "2px solid transparent",
                px: "16px",
                pt: "16px",
                fontSize: "14px",
                fontWeight: 500,
                color: "gray.500",
              })}
            >
              ...
            </span>
          ) : page === currentPage ? (
            <span key={idx} className={currentPageStyle}>
              {page}
            </span>
          ) : (
            <button
              key={idx}
              className={linkStyle}
              onClick={() => onPageChange(page as number)}
            >
              {page}
            </button>
          ),
        )}
      </div>

      {/* Next */}
      <div
        className={css({
          display: "flex",
          flex: 1,
          marginTop: "-1px",
          justifyContent: "flex-end",
        })}
      >
        <button
          className={linkStyle}
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
          <ArrowLongRightIcon aria-hidden="true" className={iconStyle} />
        </button>
      </div>
    </nav>
  );
}
