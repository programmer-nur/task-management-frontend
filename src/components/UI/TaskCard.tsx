const TaskCard = () => {
    return (
      <div>
        <article className="rounded-xl border-2 border-gray-100 bg-white">
          <div className="flex justify-end">
            <strong className="mb-[2px] me-[2px] inline-flex items-center gap-1 rounded-es-xl rounded-se-xl bg-blue-600 px-3 py-1.5 text-white">
              <span className="text-[10px] font-medium sm:text-xs">Complete</span>
            </strong>
          </div>
          <div className="flex items-start gap-4 px-8 pb-8 pt-2">
            <div>
              <h3 className="font-medium line-clamp-1 sm:text-lg">Question</h3>
  
              <p className="line-clamp-2 text-sm text-gray-700">
                Lorem ipsum dolor, sit amet
              </p>
            </div>
          </div>
        </article>
      </div>
    );
  };
  export default TaskCard;
  