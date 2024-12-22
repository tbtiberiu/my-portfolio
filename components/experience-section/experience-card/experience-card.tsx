'use client'

import { useState } from 'react'
import { ChevronUpIcon, ChevronDownIcon } from '@heroicons/react/24/outline'
import ExperienceInfo from '@/types/experience-info'
import { ClockIcon, MapPinIcon } from '@heroicons/react/24/solid'
import WatersLogo from '@/components/shared/icons/waters/WatersLogo'
import EndavaLogo from '@/components/shared/icons/endava/EndavaLogo'
import clsx from 'clsx'

interface ExperienceCardProps {
  experienceInfo: ExperienceInfo
  defaultOpen?: boolean
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({
  experienceInfo,
  defaultOpen = false,
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen)

  const renderCompanyLogo = (company: string) => {
    switch (company.toLowerCase()) {
      case 'waters corporation':
        return <WatersLogo />
      case 'endava':
        return <EndavaLogo />
      default:
        return <div className="w-40 h-40 bg-gray-300 rounded-lg"></div>
    }
  }

  return (
    <div className="mb-2">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={clsx(
          'w-full px-6 py-2 flex justify-between items-center rounded-lg overflow-hidden text-white mb-2',
          {
            'bg-[#2272b2]': isOpen,
            'bg-[#394148]': !isOpen,
          }
        )}
      >
        <p className="font-bold flex gap-2">
          <span className="uppercase">{experienceInfo.title}</span>
          <span> @ </span>
          <span>{experienceInfo.company}</span>
        </p>
        <div className="w-12 text-white">
          {isOpen ? <ChevronDownIcon /> : <ChevronUpIcon />}
        </div>
      </button>
      {isOpen && (
        <div className="p-6 rounded-lg overflow-hidden bg-[#ffffff] dark:bg-gray-900 flex items-center gap-2">
          <div className="max-w-3xl">
            <div className="flex items-center gap-4 text-sm text-[#498dc4] font-semibold mb-2">
              <div className="flex items-center gap-1">
                <div className="w-6">
                  <MapPinIcon />
                </div>
                <p>{experienceInfo.location}</p>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-6">
                  <ClockIcon />
                </div>
                <p>{experienceInfo.dates}</p>
              </div>
            </div>
            <p className="mb-4">{experienceInfo.description}</p>
            <div className="flex flex-wrap gap-2">
              {experienceInfo.technologies.map((tech, i) => (
                <span
                  key={i}
                  className="text-sm bg-gray-200 dark:bg-gray-800 px-3 py-1 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
          <div className="flex-1 flex justify-center p-6">
            <div className="flex justify-center w-44 text-foreground">
              {renderCompanyLogo(experienceInfo.company)}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default ExperienceCard
