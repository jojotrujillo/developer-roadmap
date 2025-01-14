import { RoadmapSelector, TeamResourceConfig } from './RoadmapSelector';
import type { TeamDocument } from './CreateTeamForm';

type Step2Props = {
  team: TeamDocument;
  teamResourceConfig: TeamResourceConfig;
  setTeamResourceConfig: (config: TeamResourceConfig) => void;
  onBack: () => void;
  onNext: () => void;
};

export function Step2(props: Step2Props) {
  const { team, onBack, onNext, teamResourceConfig, setTeamResourceConfig } =
    props;

  return (
    <>
      <div className="mt-4 flex w-full flex-col">
        <div className="mb-1 mt-2">
          <h2 className="mb-2 text-2xl font-bold">Select Roadmaps</h2>
          <p className="text-sm text-gray-700">
            Picks the roadmaps to be made available to your team for tracking.
            You can always add more later.
          </p>
        </div>

        <RoadmapSelector
          team={team}
          teamResourceConfig={teamResourceConfig}
          setTeamResourceConfig={setTeamResourceConfig}
        />
      </div>

      <div className="mt-4 flex flex-row items-center justify-between gap-2">
        <button
          type="button"
          onClick={onBack}
          className={
            'rounded-md border border-red-400 bg-white px-4 py-2 text-red-500'
          }
        >
          <span className="mr-1">&larr;</span>
          Previous Step
        </button>
        <button
          type="submit"
          disabled={teamResourceConfig.length === 0}
          onClick={onNext}
          className={
            'rounded-md border bg-black px-4 py-2 text-white disabled:opacity-50'
          }
        >
          Next Step
          <span className="ml-1">&rarr;</span>
        </button>
      </div>
    </>
  );
}
