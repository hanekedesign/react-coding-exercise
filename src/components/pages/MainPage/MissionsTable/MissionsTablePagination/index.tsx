import { Dispatch, FC, SetStateAction } from "react";
import Button from "../../../../common/Button";
import "./index.scss";

interface MissionsTablePaginationProps {
  pageOffset: number;
  setPageOffset: Dispatch<SetStateAction<number>>;
}

const MissionsTablePagination: FC<MissionsTablePaginationProps> = ({
  pageOffset,
  setPageOffset,
}) => {
  return (
    <div className="missions-table-pagination">
      <div className="missions-table-pagination-page">
        <span className="missions-table-pagination-page__text">
          {pageOffset ? pageOffset + 1 : 0} - {pageOffset + 6} of 109
        </span>
      </div>
      {pageOffset + 6 <= 109 && (
        <div className="missions-table-pagination-button-wrapper">
          <Button
            onClick={() => {
              setPageOffset(pageOffset + 6);
            }}
          >
            LOAD MORE
          </Button>
        </div>
      )}
      {pageOffset >= 6 && (
        <div className="missions-table-pagination-button-wrapper">
          <Button
            onClick={() => {
              setPageOffset(pageOffset - 6);
            }}
          >
            BACK
          </Button>
        </div>
      )}
    </div>
  );
};

export default MissionsTablePagination;
function setPage(arg0: number) {
  throw new Error("Function not implemented.");
}
