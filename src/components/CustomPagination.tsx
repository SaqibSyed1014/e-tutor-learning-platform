
import React from 'react';
import { cn } from '@/lib/utils';
import { ArrowLeft, ArrowRight } from 'lucide-react';

interface CustomPaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
    className?: string;
}

const CustomPagination: React.FC<CustomPaginationProps> = ({
                                                               currentPage,
                                                               totalPages,
                                                               onPageChange,
                                                               className
                                                           }) => {
    // Always show first, current, and last page
    // For other pages, show one before and one after current page
    const getPageNumbers = () => {
        const pages = [];

        // Always include page 1
        pages.push(1);

        // Add pages before current
        for (let i = Math.max(2, currentPage - 1); i < currentPage; i++) {
            if (i > 1) pages.push(i);
        }

        // Add current page if not already added
        if (currentPage > 1 && currentPage < totalPages) {
            pages.push(currentPage);
        }

        // Add pages after current
        for (let i = currentPage + 1; i < Math.min(totalPages, currentPage + 2); i++) {
            pages.push(i);
        }

        // Always include last page if different from first page
        if (totalPages > 1) {
            pages.push(totalPages);
        }

        return pages;
    };

    const pageNumbers = getPageNumbers();

    return (
        <div className={cn("flex items-center justify-center gap-2 my-8", className)}>
            <button
                onClick={() => onPageChange(Math.max(1, currentPage - 1))}
                disabled={currentPage === 1}
                className="h-11 w-11 flex items-center justify-center rounded-full border border-gray-200 text-gray-400 hover:bg-gray-50 disabled:opacity-50"
                aria-label="Previous page"
            >
                <ArrowLeft size={20} />
            </button>

            {pageNumbers.map((pageNumber, index) => {
                // Check if we need to insert an ellipsis
                const previousPage = pageNumbers[index - 1];
                if (previousPage && pageNumber - previousPage > 1) {
                    return (
                        <React.Fragment key={`${pageNumber}-ellipsis`}>
                            <div className="h-11 w-11 flex items-center justify-center">...</div>
                            <button
                                key={pageNumber}
                                onClick={() => onPageChange(pageNumber)}
                                className={cn(
                                    "h-11 w-11 flex items-center justify-center rounded-full font-medium",
                                    currentPage === pageNumber
                                        ? "bg-orange-500 text-white"
                                        : "border border-gray-200 text-gray-700 hover:bg-gray-50"
                                )}
                                aria-label={`Page ${pageNumber}`}
                                aria-current={currentPage === pageNumber ? "page" : undefined}
                            >
                                {String(pageNumber).padStart(2, '0')}
                            </button>
                        </React.Fragment>
                    );
                }

                return (
                    <button
                        key={pageNumber}
                        onClick={() => onPageChange(pageNumber)}
                        className={cn(
                            "h-11 w-11 flex items-center justify-center rounded-full font-medium",
                            currentPage === pageNumber
                                ? "bg-orange-500 text-white"
                                : "border border-gray-200 text-gray-700 hover:bg-gray-50"
                        )}
                        aria-label={`Page ${pageNumber}`}
                        aria-current={currentPage === pageNumber ? "page" : undefined}
                    >
                        {String(pageNumber).padStart(2, '0')}
                    </button>
                );
            })}

            <button
                onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
                disabled={currentPage === totalPages}
                className="h-11 w-11 flex items-center justify-center rounded-full border border-gray-200 text-gray-400 hover:bg-gray-50 disabled:opacity-50"
                aria-label="Next page"
            >
                <ArrowRight size={20} />
            </button>
        </div>
    );
};

export default CustomPagination;
