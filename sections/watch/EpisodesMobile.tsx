import { AnimeEpisodes } from '@/services/aniwatch/types/parsers';
import React from 'react'

interface EpisodesMobileProps {
    episodeList?: AnimeEpisodes
    handleChangeEpisode: (id: string) => void;
    episodeId?: string;
}

export default function EpisodesMobile({ episodeList, handleChangeEpisode, episodeId }: EpisodesMobileProps) {
    return (
        <div className="xl:hidden flex mt-5">
            {episodeList && <>
                <p className="mr-4">Episodes:</p>
                <div className="flex gap-1 flex-wrap">
                    {episodeList.episodes?.map((episode, index) => {
                        if (!episode.episodeId) return null
                        return (
                            <button onClick={() => handleChangeEpisode(episode.episodeId!)}
                                key={index}
                                className={`block ${episodeId === episode.episodeId ? 'bg-primary' : 'bg-cgray'} text-white py-1 px-10 rounded-sm cursor-pointer`}
                            >{episode.number}</button>
                        )
                    })}
                </div>
            </>}
        </div>
    )
}
