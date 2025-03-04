import React from "react";
import PropTypes from "prop-types";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { ClipboardDocumentCheckIcon, ClipboardDocumentIcon } from "@heroicons/react/24/solid";

function CodeBlock({ code }) {
  const [copied, setCopied] = React.useState(false);

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 1500);
  };

  return (
    <div className="mt-4 rounded-lg border bg-gray-100 dark:border-gray-700 dark:bg-gray-800 ">
      <div className="flex items-center justify-between border-b px-4 py-2 dark:border-gray-700">
        <span className="text-xs font-medium text-gray-500 dark:text-white">Kod Örneği</span>
        <CopyToClipboard text={code} onCopy={handleCopy}>
          <button className="flex items-center rounded-md bg-gray-300 px-2 py-1 text-xs font-medium transition-colors duration-200 hover:bg-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2   dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600">
            {copied ? (
              <div className="flex items-center gap-1">
                <ClipboardDocumentCheckIcon width={15} />
                <span>Kopyalandı</span>
              </div>
            ) : (
              <div className="flex items-center gap-1">
                <ClipboardDocumentIcon width={15} />
                <span>Kopyala</span>
              </div>
            )}
          </button>
        </CopyToClipboard>
      </div>
      <pre className="overflow-auto p-4 !font-mono text-xs tracking-wide md:text-sm md:tracking-normal">{code}</pre>
    </div>
  );
}

CodeBlock.propTypes = {
  code: PropTypes.string.isRequired,
  /* language: PropTypes.string.isRequired, */
};

export default CodeBlock;
