export class FrequencyArray<T extends { frequency: number }> {
  private readonly value: T[]
  private readonly totalFrequency: number
  private readonly cumulativeFrequencies: number[]

  public constructor(value: T[]) {
    this.value = value

    this.totalFrequency = value.reduce((sum, record) => sum + record.frequency, 0)

    this.cumulativeFrequencies = value.reduce<number[]>((frequencies, record) => {
      const lastFrequency = frequencies[frequencies.length - 1] ?? 0

      return [...frequencies, lastFrequency + record.frequency / this.totalFrequency]
    }, [])
  }

  public random(): T {
    const random = Math.random()
    const randomIndex = this.cumulativeFrequencies.findIndex(frequency => random <= frequency)

    return this.value[randomIndex]
  }
}